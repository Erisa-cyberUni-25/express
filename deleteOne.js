const {MongoClient} = require('mongodb');

//MongoDBで作成したDBのURI（接続情報）
const uri = "URI";

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