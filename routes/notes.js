var express = require('express');
var router = express.Router();

//接続情報を設定
const {MongoClient} = require('mongodb');
//MongoDBで作成したDBのURI（接続情報）
const uri = "URI";
const client = new MongoClient(uri);

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