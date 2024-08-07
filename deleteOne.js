require('dotenv').config();

// 接続情報を設定
const { MongoClient } = require("mongodb");
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function run(){
    const database = client.db('notes');
    const notes = database.collection('notes');

    //idが２のドキュメントを削除
    const query = {id:2};
    const note = await notes.deleteOne(query);
    console.log(note);

    //クローズ
    await client.close();
}
run()