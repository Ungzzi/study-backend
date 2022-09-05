const mysql = require("mysql");

const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '12345678',
    database: 'dbstudy'
})

exports.signUp_requset = (data, cb) => {
    var sql = `INSERT INTO user values('${data.id}', '${data.pw}', '${data.name}') `;
    cnn.query(sql, (err, rows) => {
        if (err) throw err;
        console.log("users : ", rows);
        cb(rows);
    })
}
exports.login_check = (data, cb) => {
    console.log(data);
    var sql = `SELECT * FROM user WHERE id = '${data.id}' and pw = '${data.pw}'`;
    cnn.query(sql, (err, result) => {
        if (err) throw err;
        console.log("login_access : ", result);
        cb(result);
    })
}