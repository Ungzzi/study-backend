const { User } = require("../model");

exports.main = (req, res) => {
    res.render("login");
}
exports.signUp = (req, res) => {
    res.render("signUp");
}

exports.signUp_requset = (req, res) => {
    User.create({
        id: req.body.id,
        name: req.body.name,
        pw: req.body.pw
    }).then(() => {
        res.send("생성 완료.");
    })
}

exports.loggedin = (req, res) => {
    User.findAll({
        where: {
            id: req.query.id
        }
    }).then((result) => {
        var data = {
            id: req.query.id,
            name: result[0].name,
            pw: result[0].pw
        }
        res.render("loggedin", { data: data });
    })
}

exports.login = (req, res) => {
    User.findAll({
        where: {
            id: req.body.id,
            pw: req.body.pw
        }
    }).then((result) => {
        res.send({ result: result.length });
    })
}

exports.update = (req, res) => {
    var data = {
        id: req.query.id,
        name: req.query.name,
        pw: req.query.password
    }
    res.render("update", { data: data });
}

exports.update_info = (req, res) => {
    User.update({
        name: req.body.cg_name,
        pw: req.body.cg_pw
    }, {
        where: {
            id: req.body.id
        }
    }).then(() => {
        var data = {
            id: req.body.id,
            name: req.body.cg_name,
            pw: req.body.cg_pw
        }
        res.render("update", { data: data });
    })
}

exports.delete_info = (req, res) => {
    User.destroy({
        where: { id: req.body.id }
    }).then((result) => {
        res.send("삭제완료");
    })
}