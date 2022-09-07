const Sequelize = require("sequelize"); // sequelize 모듈 호출
const config = require("../config/config.json")["development"]; // config.json 파일의 development 객체 호출

// config 객체 생성
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
)


const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Visitor = require("./Visitor")(sequelize, Sequelize);
db.User = require("./User")(sequelize, Sequelize);

/* 
db = {
    "sequelize" : sequelize,
    "Sequelize" : Sequelize,
    "Visitor" : require("./Visitor")(sequelize, Sequelize)
}
*/

module.exports = db;    // controller 에서 해당 모듈 사용