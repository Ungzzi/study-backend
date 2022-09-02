exports.user = function () {
    var users =
        `spreatics//12341234//코딩온
codee//4321//codee
jiung//1234//정지웅`;

    var u_list = [];
    var u_db = [];

    u_list = users.split("\n");

    for (var i = 0; i < u_list.length; i++) {
        var u = u_list[i].split("//");
        var person = {
            id: u[0],
            pw: u[1],
            name: u[2]
        }
        u_db.push(person);
    }
    console.log(u_db);
    return u_db;
}

// exports.user = function () {
//     return { id: 'jiung', pw: '1234' };
// }