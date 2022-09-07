const mysql = require("mysql");

const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '12345678',
    database: 'dbstudy'
})

exports.signUp_requset = (data) => {
    return new Promise(function (resolve, reject) {
        var sql = `INSERT INTO user values('${data.id}', '${data.pw}', '${data.name}') `;
        cnn.query(sql, (err, rows) => {
            if (err) throw err;
            resolve(rows);
        })
    })

}
exports.login_check = (data) => {
    return new Promise(function (resolve, reject) {
        var sql = `SELECT * FROM user WHERE id = '${data.id}' and pw = '${data.pw}'`;
        cnn.query(sql, (err, result) => {
            if (err) throw err;
            resolve(result);
        })
    })
}
exports.get_info = (data) => {
    return new Promise(function (resolve, reject) {
        var sql = `SELECT * FROM user WHERE id = '${data}'`;
        cnn.query(sql, (err, result) => {
            if (err) throw err;
            resolve(result);
            // return result;
        })
    })
}

exports.update_info = (data) => {
    return new Promise(function (resolve, rejcet) {
        var sql = `UPDATE user SET name = '${data.cg_name}', pw = '${data.cg_pw}' WHERE id = '${data.id}'`;
        cnn.query(sql, (err, result) => {
            if (err) throw err;
            resolve(result);
        })
    })
}

exports.delete_info = (data) => {
    return new Promise(function (resolve, reject) {
        var sql = `DELETE FROM user WHERE id = '${data}'`;
        cnn.query(sql, (err, result) => {
            if (err) throw err;
            resolve(result);
        })
    })
}