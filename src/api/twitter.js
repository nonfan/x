// api/twitter.js
const axios = require('axios');

module.exports = async (req, res) => {
  // const twitterUrl = 'https://x.com/ycxomzhe/status/1857442859684606177?s=46'; // 目标 Twitter 地址
  //
  // // 重定向请求到指定的 Twitter 地址
  // res.redirect(twitterUrl);

  res.status(200).json({message: 'Hello from TwitterUrl!'});
};
