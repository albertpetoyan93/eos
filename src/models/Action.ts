import mongoose, { Schema, model, Document } from "mongoose";

interface IAction extends Document {
  trx_id: string;
  block_time: string;
  block_num: number;
}

const schema: Schema = new Schema(
  {
    trx_id: { type: String, unique: true, required: true },
    block_time: { type: String, required: true },
    block_num: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Action = model<IAction>("Action", schema);

export default Action;
