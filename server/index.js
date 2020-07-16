/*
 * @文件描述: 通过设备跳转到项目地址
 * @公司: thundersdata
 * @作者: 于效仟
 * @Date: 2019-08-08 18:25:50
 * @LastEditors: 于效仟
 * @LastEditTime: 2020-07-16 22:30:11
 */
const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('/', async (req, res) => {
    const deviceAgent = req.headers['user-agent'].toLowerCase();
    const agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/);
    if (agentID) {
      res.redirect(301, 'http://m.thundersdata.com/homepage');
    } else {
      res.redirect(301, '/homepage');
    }
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`程序已启动 http://localhost:3000/`);
  });
});
