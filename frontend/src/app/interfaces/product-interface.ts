export interface IProduct {
  _id: string;
  name: string;
  parent: string;
  display: boolean;
  mainImage: string;
  briefImage: string;
  assets: string[];
  techAssets: string[];
  description: string;
  recommendations: string;
  techDescriptions: [
    {
      techName: string;
      techUnit: string;
      techValue: string;
    }
  ];
  designs: string[];
  downloads: [
    {
      downloadName: string;
      downloadLink: string;
      downloadIcon: string;
    }
  ]
}
