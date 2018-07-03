export interface IUserEdit {
  name: string;
  value: string;
  password: string;
}

export interface IConfirmPopupData {
  message?: string;
  data?: object;
}

export interface IDesign {
  _id: string;
  structure: string;
  image: string;
}