export interface IProduct {
  _id?: string;
  categories: string[];
  sku: string;
  name: string;
  price: number;
  discount?: number;
  files?: any[];
  description?: string;
  onMainPage: boolean;
  dimensions?: {
    width: number,
    height: number
  };
  createdAt?: number;
  likes?: number;
  likedBy?: String;
  dislikes?: number;
  dislikedBy?: string;
  views?: number;
  comments?: [{
    comment: string,
    commentator: string,
    commentedAt: number
  }];
}
