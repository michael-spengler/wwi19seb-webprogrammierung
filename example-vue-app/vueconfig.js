module.exports = {
    publicPath: "/public/",
    transpileDependencies: ["vuetify"],
    pwa: {
      themeColor: "#363636",
      msTileColor: "#3F51B5",
      manifestOptions: {
        name: "Fancy Vue Example App",
        short_name: "Fancy Vue Example App",
      },
    },
    chainWebpack: (config) => {
      config.plugin("html").tap((args) => {
        args[0].title = "Fancy Vue Example App";
        return args;
      });
      config.plugin("define").tap((args) => {
        args[0]["process.env"]["VERSION"] = JSON.stringify(
          require("./package.json").version
        );
        return args;
      });
    },
  };