import EnvVars from "@src/constants/EnvVars";
import HttpStatusCodes from "@src/constants/HttpStatusCodes";
import Action from "@src/models/Action";
import CustomError from "@src/util/CustomError";
import axios from "axios";

interface ActionResponse {
  trx_id: string;
  block_time: string;
  block_num: number;
}

export default class ActionService {
  static fetchEOSActions = async (): Promise<ActionResponse[]> => {
    try {
      const response = await axios.post(EnvVars.EOS_API_URL as string, {
        account_name: "eosio",
        pos: -1,
        offset: -100,
      });
      return response.data.actions.map((action: any) => ({
        trx_id: action.action_trace.trx_id,
        block_time: action.block_time,
        block_num: action.block_num,
      }));
    } catch (error) {
      console.error("Error fetching actions from EOS:", error);
      throw new CustomError(error, HttpStatusCodes.BAD_REQUEST);
    }
  };
  static createActions = async (actions: ActionResponse[]) => {
    try {
      const bulkOps = actions.map((action) => ({
        updateOne: {
          filter: { trx_id: action.trx_id },
          update: { $setOnInsert: action },
          upsert: true,
        },
      }));
      if (!bulkOps.length) {
        console.info("No new actions to save.");
        return;
      }
      await Action.bulkWrite(bulkOps);
      console.info(`${bulkOps.length} actions processed and saved.`);
    } catch (error) {
      console.error("Error saving actions to DB:", error);
      throw new CustomError(error, HttpStatusCodes.BAD_REQUEST);
    }
  };
  static fetchAndSaveActions = async () => {
    try {
      const actions = await this.fetchEOSActions();
      await this.createActions(actions);
    } catch (error) {
      console.error("Failed to fetch and save actions:", error);
      throw new CustomError(error, HttpStatusCodes.BAD_REQUEST);
    }
  };
}
