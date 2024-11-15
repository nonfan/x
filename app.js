const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

// 代理请求 Twitter 内容
app.get('/:id', async (req, res) => {
  const twitterUrl = 'https://x.com/ycxomzhe/status/1857442859684606177?s=46'; // 目标 Twitter 地址
  res.redirect(twitterUrl)
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
