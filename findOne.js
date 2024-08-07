require('dotenv').config();

// 接続情報を設定
const { MongoClient } = require("mongodb");
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);


async function run(){
    const database = client.db('notes');
    const notes = database.collection('notes');

    //idが１のドキュメントを取得
    const query = {id:1};
    const note = await notes.findOne(query);
    console.log(note);

    //クローズ
    await client.close();
}
run()