// server.js

import express from 'express';
import cors from 'cors';
import fs from 'fs-extra';
import path from 'path';

const app = express();
const PORT = 3000;

// 📜 データ保存先（Git管理外）
const LOG_PATH = path.resolve('data/phasejumplog.json');

// 🌀 CORS許可 + JSON解析
app.use(cors());
app.use(express.json());

// 🧪 GET: 跳躍ログを取得
app.get('/log', async (req, res) => {
  try {
    const log = await fs.readJSON(LOG_PATH);
    res.json(log);
  } catch (err) {
    res.status(500).json({ error: '読み込み失敗', details: err });
  }
});

// 🪄 PUT: 跳躍ログを上書き保存
app.put('/log', async (req, res) => {
  try {
    await fs.writeJSON(LOG_PATH, req.body, { spaces: 2 });
    res.json({ status: 'ok', saved: true });
  } catch (err) {
    res.status(500).json({ error: '書き込み失敗', details: err });
  }
});

// 🧿 起動メッセージ
app.listen(PORT, () => {
  console.log(`LRE ritual log server running at http://localhost:${PORT}`);
});
