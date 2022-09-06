const Login = require("../model/Login");


exports.main = (req, res) => {
    res.render("login");
}
exports.signUp = (req, res) => {
    res.render("signUp");
}

exports.signUp_requset = (req, res) => {
    Login.signUp_requset(req.body, function () {
        res.send("생성 완료.");
    })
}

exports.loggedin = (req, res) => {
    Login.get_info(req.query.id, function (result) {

        var data = {
            id: req.query.id,
            name: result[0].name,
            pw: result[0].pw
        }
        res.render("loggedin", { data: data });

    })
}

exports.login = (req, res) => {
    Login.login_check(req.body, function (result) {
        res.send(result);
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
    Login.update_info(req.body, function (result) {
        var data = {
            id: req.body.id,
            pw: req.body.cg_pw,
            name: req.body.cg_name
        }
        res.render("update", { data: data });
    })
}

exports.delete_info = (req, res) => {
    Login.delete_info(req.body.id, function (result) {
        res.send(result);
    })
}



// exports.login = (req, res) => {
//     var info = Test.login();

//     if ((info.id == req.body.id) && (info.pw == req.body.pw)) {
//         res.send(true);
//     }
//     else {
//         res.send(false);
//     }
// }

// exports.login = (req, res) => {
//     var info = User.user();
//     var result = false;
//     var data = [];

//     for (var i = 0; i < info.length; i++) {
//         if ((info[i].id == req.body.id) && (info[i].pw == req.body.pw)) {
//             result = true;
//             data = [result, info[i].name];
//             break;
//         }
//         else {
//             result = false;
//         }
//     }
//     res.send(data);
// }
