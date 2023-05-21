const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Add loader for image files
      const fileLoaderRule = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
            },
          },
        ],
      };

      webpackConfig.module.rules.push(fileLoaderRule);

      return webpackConfig;
    },
  },
};
