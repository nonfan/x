const express = require('express');
const axios = require('axios');
const index = express();
const PORT = process.env.PORT || 3000;

// 代理请求 Twitter 内容
index.get('/:id', async (req, res) => {
  const twitterUrl = 'https://x.com/ycxomzhe/status/1857442859684606177?s=46'; // 目标 Twitter 地址
  res.redirect(twitterUrl)
});

index.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
