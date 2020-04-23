export const port = process.env.APP_PORT ?? 3000;
export const isDev = process.env.APP_IS_DEV
  ? process.env.APP_IS_DEV === "true"
  : true;
