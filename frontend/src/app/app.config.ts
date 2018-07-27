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
  designStructure: ['дошка', 'художній паркет', 'плитка', 'абстракція']
};
