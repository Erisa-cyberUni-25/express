var express = require('express');
var router = express.Router();

//レスポンスのjson形式のデータを定義（ノート全件）
const responseObjectDataAll = {
    textObject1 : {
        id: 1,
        title: 'ノート１のタイトルです',
        subTitle: 'ノート１のサブタイトルです',
        bodyText: 'ノート１の本文です'
    },
    textObject2 : {
        id: 2,
        title: 'ノート２のタイトルです',
        subTitle: 'ノート２のサブタイトルです',
        bodyText: 'ノート２の本文です'
    },
};

/**
 * メモ全件を取得するAPI
 * @returns {Object[]} data
 * @returns {number} data.id - ID
 * @returns {string} data.title - タイトル
 * @returns {string} data.text - 内容
 */
router.get('/', function (req, res, next) { //Getリクエストがあったとき
    //全件を取得して返す（json形式の定義したデータを出力）
    res.json(responseObjectDataAll);
})

module.exports = router;