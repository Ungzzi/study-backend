const mysql = require("mysql");

const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '12345678',
    database: 'dbstudy'
})

// cnn.query('SELECT * FROM visitor', (err, rows) => {
//     if (err) throw err;
//     console.log("visitors : ", rows);
// })

exports.get_visitor = (cb) => {
    var sql = 'SELECT * FROM visitor';
    cnn.query(sql, (err, rows) => {
        if (err) throw err;
        console.log("visitors : ", rows);

        cb(rows);
    })
}

exports.post_visitor = (data, cb) => {
    var sql = `INSERT INTO visitor(name, comment) values('${data.name}', '${data.comment}');`;
    cnn.query(sql, (err, result) => {
        if (err) throw err;
        console.log("visitors : ", result);
        cb(result.insertId);
    })
}

exports.delete_visitor = (data, cb) => {
    var sql = `DELETE FROM visitor WHERE id ='${data}');`;
    cnn.query(sql, (err, result) => {
        if (err) throw err;
        console.log("visitors : ", result);
        cb(result.insertId);
    })
}