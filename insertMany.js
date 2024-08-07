require('dotenv').config();

// 接続情報を設定
const { MongoClient } = require("mongodb");
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function run(){
    const database = client.db('notes');
    const notes = database.collection('notes');

    //データを登録
    const query = [{
        id: 1,
        title: 'ノート１のタイトルです',
        subTitle: 'ノート１のサブタイトルです',
        bodyText: 'ノート１の本文です'
    },
    {
        id: 2,
        title: 'ノート２のタイトルです',
        subTitle: 'ノート２のサブタイトルです',
        bodyText: 'ノート２の本文です'
    }];
    const note = await notes.insertMany(query);
    console.log(note);

    //クローズ
    await client.close();
}
run()