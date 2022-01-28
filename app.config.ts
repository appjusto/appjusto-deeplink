import { ExpoConfig } from "@expo/config";

const config: ExpoConfig = {
  name: "appjusto-deeplink",
  slug: "appjusto-deeplink",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
  },
  android: {
    package: "br.com.appjusto.deeplink",
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#FFFFFF",
    },
    intentFilters: [
      {
        autoVerify: false,
        action: "VIEW",
        data: {
          scheme: "https",
          host: "test.appjusto.com.br",
          pathPrefix: "/direct",
        },
        category: ["BROWSABLE", "DEFAULT"],
      },
      {
        autoVerify: false,
        action: "VIEW",
        data: {
          scheme: "https",
          host: "login.test.appjusto.com.br",
          pathPrefix: "/join",
        },
        category: ["BROWSABLE", "DEFAULT"],
      },
    ],
  },
  web: {
    favicon: "./assets/favicon.png",
  },
};

export default (): ExpoConfig => config;
