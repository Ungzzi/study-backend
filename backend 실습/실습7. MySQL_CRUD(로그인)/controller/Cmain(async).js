const Login = require("../model/Login");


exports.main = (req, res) => {
    res.render("login");
}
exports.signUp = (req, res) => {
    res.render("signUp");
}

exports.signUp_requset = async (req, res) => {
    var result = await Login.signUp_requset(req.body);
    res.send("생성 완료.");
}

exports.loggedin = async (req, res) => {
    var result = await Login.get_info(req.query.id);
    var data = {
        id: req.query.id,
        name: result[0].name,
        pw: result[0].pw
    }
    res.render("loggedin", { data: data });
}

exports.login = async (req, res) => {
    var check_result = await Login.login_check(req.body);
    res.send(check_result);
}

exports.update = (req, res) => {
    var data = {
        id: req.query.id,
        name: req.query.name,
        pw: req.query.password
    }
    res.render("update", { data: data });
}

exports.update_info = async (req, res) => {
    var result = await Login.update_info(req.body);
    var data = {
        id: req.body.id,
        pw: req.body.cg_pw,
        name: req.body.cg_name
    }
    res.render("update", { data: data });
}

exports.delete_info = async (req, res) => {
    var result = await Login.delete_info(req.body.id);
    res.send(result);
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
