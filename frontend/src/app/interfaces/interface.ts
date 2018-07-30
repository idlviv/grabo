export interface IConfirmPopupData {
  message?: string;
  data?: object;
}

export interface IDesign {
  _id: string;
  structure: string;
  image: string;
}

export interface IFeedback {
  message: string;
  contacts: string;
  name: string;
}