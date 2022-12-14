const Visitor = (Sequelize, DataTypes) => {
    // Sequelize : model/index.js 의 sequelize 객체
    // DataTypes : model/index.js 의 Sequelize 객체
    const model = Sequelize.define(
        "visitor", // 테이블 이름
        {
            // 스키마 정의
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            comment: {
                type: DataTypes.TEXT("medium")
            }
        },
        {
            tableName: "visitor",
            // true 미선언 시 : insert into visitors values()~~~
            freezeTableName: true,
            // true : createdAt과 updatedAt 컬럼이 생성되며, 데이터가 생성되는 시간과 수정되는 시간을 나타내는 옵션
            timestamps: false
        }
    );
    return model;
}

module.exports = Visitor;