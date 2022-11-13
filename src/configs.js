const rollbarConfig = {
  accessToken: process.env.ACCESS_TOKEN_ROLLBAR,
  captureUncaught: true,
  captureUnhandledRejections: true,
  payload: {
    environment: 'production',
  },
};

export default rollbarConfig;
