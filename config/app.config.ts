export default () => ({
  appSecret: process.env.APP_SECRET,
  uploadPath: process.env.UPLOAD_PATH,
  production: process.env.PRODUCTION,
});
