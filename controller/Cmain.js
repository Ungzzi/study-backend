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

exports.login = (req, res) => {
    Login.login_check(req.body, function (result) {
        if (result.length > 0) {
            console.log(req.body);
            res.send(result);
        }
        else res.send(false);
    })
}

exports.loggedin = (req, res) => {
    var data = {
        id: req.body.id,
        name: req.body.name,
        pw: req.body.pw
    }
    console.log(req.body);
    console.log("data : ", data);
    res.render("loggedin", { data: data });
}

exports.update = (req, res) => {

    console.log(req.body);
    console.log("data2 : ", data);
    res.render("update", { data: data });
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
