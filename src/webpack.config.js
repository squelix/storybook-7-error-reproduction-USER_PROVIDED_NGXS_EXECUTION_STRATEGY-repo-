const webpack = require('webpack');

module.exports = function (options) {
  return {
    ...options,
    plugins: [
      ...options.plugins,
      new webpack.DefinePlugin({
        'process.env': {
          CI_COMMIT_SHA: JSON.stringify(process.env.CI_COMMIT_SHA),
          USE_SERVER_VARS: JSON.stringify(!!process.env.USE_SERVER_VARS),
          BUILD_PROD: JSON.stringify(!!process.env.CI_COMMIT_SHA),
          GIT_BRANCH_NAME: JSON.stringify(process.env.CI_COMMIT_REF_NAME),
        },
      }),
    ],
  };
};
