import { ClientSession, Document, ObjectId } from "mongoose";
import * as e from "express";
import { Types } from "mongoose";
import { UserStatuses } from "../constants/Enums";

interface FilterOptions {
  [key: string]: any;
}

export interface IPagination {
  limit?: string;
  offset?: string;
}
export interface IListOptions extends IPagination {
  search?: string;
  filter?: FilterOptions;
  sort?: FilterOptions;
}
export interface IListParams extends IPagination {
  search?: string;
  filter?: string;
  sort?: string;
}

export interface IAuthRequest extends e.Request {
  user: IToken;
}

export interface IUserSchema extends Document {
  user_name: string;
  name: string;
  email: string;
  password: string;
  active_role: string;
  roles: string[];
  online_status: boolean;
  avatar: string;
  phone_number: string;
  profession: string;
  about: string;
  status: UserStatuses;
  comparePassword(password: string): Promise<boolean>;
}

export interface ILogin {
  email: string | undefined;
  password: string;
}
export interface IRegister {
  user_name: string;
  surname?: string;
  name?: string;
  email: string | undefined;
  password: string;
  repeat_password: string;
  role: string;
  google_id: string | undefined;
  vk_id: number | undefined;
  telegram_id: string | undefined;
  verificationToken: string;
}
export interface IUser {
  id?: string;
  email?: string;
  password?: string;
  user_name?: string;
  name?: string;
  avatar?: IFile;
  roles?: string[];
  phone_number?: string;
  profession?: string;
  slogan?: string;
  gender?: string;
  about_me?: string;
  online_status?: string;
  address?: IAddress;
  languages?: ILanguage;
  status?: string;
  active_role?: string;
}
export interface IFile {
  mimetype: string;
  url: string;
  name: string;
}
export interface IAddress {
  country: string;
  city: string;
}
export interface ILanguage {
  language: string;
  level: string;
}
export interface ISingle {
  id?: string;
}
export interface IDeleteAccount {
  id: string;
  password: string;
}

export interface IToken {
  userId: string;
  activeRole: string;
  roles?: string[];
}
export interface ICheckPassword {
  userId: string;
  password: string;
}

export interface IChangePassword {
  userId: string;
  old_password: string;
  new_password: string;
  repeat_new_password: string;
}

export interface IService {
  userId: string;
  id?: string;
  title?: string;
  description?: string;
  service_volume?: string;
  service_volume_desc?: string;
  price?: string;
  delivery_time?: number;
  category?: string;
  sub_category?: string;
  photos?: any;
  tools?: string;
  country?: string;
  city?: string;
  status?: string;
}
export interface IProject {
  userId: string;
  id?: string;
  title?: string;
  description?: string;
  delivery_time?: number;
  price?: string;
  photos?: any;
  files?: any;
  skills?: any;
  category?: string;
  sub_category?: string;
  tools?: string;
  country?: string;
  city?: string;
  status?: string;
}

export interface IReview {
  id?: string;
  rate?: number;
  message?: string;
  service_id?: string;
  recipient?: string;
  sender?: string;
  parent_id?: string;
}
export interface ITransaction {
  id?: string;
  order?: string;
  seller?: string;
  buyer?: string;
  amount1?: number;
  amount2: number;
  currency1?: string;
  currency2: string;
  status: string;
  coin_status?: string;
  ipn_id?: string;
  txn_id?: string;
  description?: string;
  session?: ClientSession;
}
export interface INotification {
  id?: string;
  status?: string;
  description?: string;
  type?: string;
  recipient?: Types.ObjectId[];
}
export interface ISubscription {
  id?: string;
  type?: string;
  user?: string;
}

export interface IBid {
  user_id: string;
  project_id: string;
  service_id?: string;
  id?: string;
  status?: string;
  price?: string;
  term?: string;
  description?: string;
}
export interface IPaymentMethod {
  _id?: string;
  card_number: string;
  expiration_date: string;
  security_code: string;
  first_name: string;
  last_name: string;
  type: string;
  user_id: string;
}

export interface IContract {
  buyer?: string;
  seller?: string;
  project_id: string;
  id?: string;
  start_date?: string;
  end_date?: string;
  status?: string;
  price?: string;
}
export interface ICategory {
  title?: string;
  id?: string;
}
export interface IDispute {
  user_id?: string;
  order: string;
  status?: string;
  id?: string;
  message: string;
  files?: string[];
}
