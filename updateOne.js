require('dotenv').config();

// 接続情報を設定
const { MongoClient } = require("mongodb");
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function run(){
    const database = client.db('notes');
    const notes = database.collection('notes');

    //idが1のデータを更新
    const note = await notes.updateOne(
        { id: 1 },
        { 
            $set: {
                title: 'ノート１のタイトルを更新しました',
            },
        }
    );
    console.log(note);

    //クローズ
    await client.close();
}
run()