import Constants from "expo-constants";

const ENV = {
  dev: {
    APP_GOGIFARM_API_URL: "http://localhost:8080"
  },
  local: {
    APP_GOGIFARM_API_URL: "http://localhost:8080"
  },
  prod: {
    APP_GOGIFARM_API_URL: "http://localhost:8080"
  }
};

const getEnv = (env = Constants.manifest?.releaseChannel) => {
  if(__DEV__) {
    return ENV.dev
  } else if (env === 'staging') {
    return ENV.local
  } else if (env === 'prod') {
    return ENV.prod
  }
}

export default getEnv;