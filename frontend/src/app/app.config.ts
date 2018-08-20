import { environment } from '../environments/environment';

export const config = {
  serverUrl: '/',
  // defaultAvatarPath: 'https://res.cloudinary.com/hcwwcxz0m/default-avatar180x180.jpg',
  // defaultProductImgPath: 'https://res.cloudinary.com/hcwwcxz0m/default-product180x180.jpg',
  defaultProductImg: 'product',
  defaultAvatar: 'avatar',
  gLogo: 'g_logo',
  graboLogo: 'grabo_logo',
  grabofloorsLogo: 'grabofloors_logo',
  graboplastLogo: 'graboplast_logo',
  stripe: 'stripe',
  blogOptions: {
    showViews: true,
    showComments: true,
    commentsLength: 10,
  },
  imgPath: 'https://res.cloudinary.com/',
  cloudinary: {
    cloud_name: environment.cloud_name
  },
  designStructure: ['дошка', 'художній паркет', 'плитка', 'абстракція', 'дитячий'],
  techAssets: [
    {
      _id: 'fiber',
      image: 'fiber',
      description: ''
    },
    {
      _id: 'europe',
      image: 'europe',
      description: ''
    },
    {
      _id: 'water_resistant',
      image: 'water_resistant',
      description: ''
    },
    {
      _id: 'iguard',
      image: 'iguard',
      description: ''
    },
    {
      _id: 'leaf',
      image: 'leaf',
      description: ''
    },
    {
      _id: 'cdf',
      image: 'cdf',
      description: ''
    },
    {
      _id: 'pur',
      image: 'pur',
      description: ''
    },
    {
      _id: 'san',
      image: 'san',
      description: ''
    },
    {
      _id: 'silver_knight',
      image: 'silver_knight',
      description: ''
    },
    {
      _id: 'solvent_free',
      image: 'solvent_free',
      description: ''
    },
    {
      _id: 'tech',
      image: 'tech',
      description: ''
    },
    {
      _id: 'wax',
      image: 'wax',
      description: ''
    },
    {
      _id: 'e_nowaste',
      image: 'e_nowaste',
      description: ''
    },
    {
      _id: 'e_phthalate',
      image: 'e_phthalate',
      description: ''
    },
    {
      _id: 'e_recycle',
      image: 'e_recycle',
      description: ''
    },
    {
      _id: 'e_reachconform',
      image: 'e_reachconform',
      description: ''
    },
    {
      _id: 'heavy_metal',
      image: 'heavy_metal',
      description: ''
    },
    {
      _id: '200cm',
      image: '200cm',
      description: ''
    },
    {
      _id: 'clp',
      image: 'clp',
      description: ''
    },
    {
      _id: 'silver_knight',
      image: 'silver_knight',
      description: ''
    },
    {
      _id: 'floor_score',
      image: 'floor_score',
      description: ''
    },
    {
      _id: 'fiba',
      image: 'fiba',
      description: ''
    },
  ],
  homeBanner: [
    'banner_residential',
    'banner_commercial',
    'banner_parquet',
    'banner_show',
    'banner_sport',
    'banner_transport',
  ],

};
