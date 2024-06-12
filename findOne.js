const {MongoClient} = require('mongodb');

//MongoDBで作成したDBのURI（接続情報）
const uri = "URI";

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