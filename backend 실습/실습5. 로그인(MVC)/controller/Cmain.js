const Test = require("../model/Test");
const User = require("../model/User");

exports.main = (req, res) => {
    res.render("login");
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

exports.login = (req, res) => {
    var info = User.user();
    var result = false;
    var data = [];

    for (var i = 0; i < info.length; i++) {
        if ((info[i].id == req.body.id) && (info[i].pw == req.body.pw)) {
            result = true;
            data = [result, info[i].name];
            break;
        }
        else {
            result = false;
        }
    }
    res.send(data);
}
