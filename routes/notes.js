var express = require('express');
var router = express.Router();
const cors = require('cors'); // corsミドルウェアを追加
require('dotenv').config();

// 接続情報を設定
const { MongoClient } = require("mongodb");
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

// corsミドルウェアを使用
router.use(cors());

router.get('/', async (req, res) => { //Getリクエストがあったとき
    //データベース、コレクションの指定
    const database = client.db('notes');
    const notes = database.collection('notes');

    //データベースからidが1のドキュメントを取得
    const query = {id:1};
    const note = await notes.findOne(query);

    //取得したjson形式のデータを出力）
    res.json(note);
})

module.exports = router;