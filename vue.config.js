module.exports = {
  devServer: {
    public: "http://0.0.0.0"
  },
  publicPath: process.env.NODE_ENV === "production" ? "/my-project/" : "/"
};
