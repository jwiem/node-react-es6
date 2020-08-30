module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "users",
    {
      user_id: {
        type: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email_Verified: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
    },
    {
      timestamps: false,
      tableName: "users",
    }
  );
};
