/**
 * Environments variables declared here.
 */

/* eslint-disable node/no-process-env */

const EnvVars = {
  NodeEnv: process.env.NODE_ENV ?? "",
  Port: process.env.PORT ?? 0,
  CookieProps: {
    Key: "ExpressGeneratorTs",
    Secret: process.env.COOKIE_SECRET ?? "",
    // Casing to match express cookie options
    Options: {
      httpOnly: true,
      signed: true,
    },
  },
  Db: {
    mongo_url: process.env.MONGO_URL ?? "",
  },
  EOS_API_URL: process.env.EOS_API_URL,
};

export default EnvVars;
