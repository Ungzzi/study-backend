// modle/index.js의 export한 db 객체에서 Visitor 키 값만 가져옴
const { Visitor } = require("../model");

/*
const model = require("../model");
model = {
    "sequelize" : sequelize,
    "Sequelize" : Sequelize,
    "Visitor" : require("./Visitor")(sequelize, Sequelize)
}
model.Visitor
*/

exports.get_visitors = (req, res) => {
    Visitor.findAll()  // select * from visitor 
        .then((result) => {
            console.log("result: ", result);
            console.log("index");
            res.render("index", { data: result });
        })

    /* 
    Visitor.get_visitors(function (result) {
        console.log("result : ", result);
        console.log("index");
        res.render("index", { data: result });
    });
    */
}

exports.post_comment = (req, res) => {
    Visitor.create({
        name: req.body.name,
        comment: req.body.comment
    }).then((result) => {
        res.send({ id: result.id }); // result.id == result.datavalues.id
    })


    /*
    console.log(req.body);

    Visitor.insert(req.body.name, req.body.comment, function (result) {
        res.send({ id: result });
    });
    */
}

exports.get_visitor = (req, res) => {
    Visitor.findOne({
        // attributes: ['name', 'comment'] : name과 comment만 출력
        where: {
            id: req.query.id
        }
    }).then((result) => {
        res.send({ result: result });
    })

    /*
    Visitor.findAll({
        where: {
            id: req.query.id
        }
    }).then((result) => {
        res.send({ result: result[0] });
    })
    */

    /*
    Visitor.get_visitor(req.query.id, function (result) {
        console.log("result : ", result);
        res.send({ result: result[0] });
    })
    */
}

exports.patch_comment = (req, res) => {
    Visitor.update({
        name: req.body.name,
        comment: req.body.comment
    }, {
        where: { id: req.body.id }
    }).then((result) => {
        // console.log(result);
        res.send("수정 성공");
    });


    /*
    Visitor.update(req.body, function (result) {
        console.log(result);
        res.send("수정 성공");
    });
    */
}

exports.delete_comment = (req, res) => {
    Visitor.destroy({
        where: { id: req.body.id }
    }).then((result) => {
        // console.log(result);
        res.send("삭제 성공");
    });
}