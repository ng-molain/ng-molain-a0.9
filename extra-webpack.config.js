module.exports = {
  module: {
      rules: [
          {
              test: /(\.scss|\.css)$/,
              use: [
                {
                    loader: "postcss-loader",
                    options: {
                        plugins: [require("tailwindcss")("./tailwind.config.js")]
                    }
                },
                {
                  loader: "sass-loader"
                }
              ]
          },
          {
              test: /\.less$/,
              loader: 'less-loader',
              options: {
                  modifyVars: { // 修改主题变量
                      'primary-color': '#3450A1',
                  },
                  javascriptEnabled: true
              }
          }
      ]
  }
};
