export interface IConfirmPopupData {
  message?: string;
  data?: object;
}

export interface IDesign {
  _id: string;
  structure: string;
  image: string;
}

export interface ITechAsset {
  _id: string;
  image: string;
  description: string;
}

export interface IFeedback {
  message: string;
  contacts: string;
  name: string;
}

export interface IRecommendation {
  _id: string;
  name: string;
  sub: string[];
}