const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class User extends Model {
    static classLevelMethod() {
        return 'foo';
      }
      instanceLevelMethod() {
        return 'bar';
      }
      getFullname() {
        return [this.name+this.firstName];
      }
}

User.init({
  
  // Model attributes are defined here
  name: DataTypes.TEXT,
    // allowNull defaults to true
    favoriteColor: {
        type: DataTypes.TEXT,
        defaultValue: 'green'
      },
      age: DataTypes.INTEGER,
      cash: DataTypes.INTEGER
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'User' // We need to choose the model name
});

class User1 extends Model {}
  
  User1.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
  }, { sequelize });
  const user1 = new User1({ id: 1 });
  console.log(User.classLevelMethod()); // 'foo'
  const user = User.build({ name: 'Jane',firstName:'first',favoriteColor:"purple"});
   User.build({ cash: 9 });
  console.log(user.instanceLevelMethod()); // 'bar'
  console.log(user.getFullname());
  console.log(user.name);
  console.log(user1.id); // 1
  console.log(user.favoriteColor);
  console.log(user1.firstName);
  console.log('Jane was saved to the database!');
console.log(User1=== sequelize.models.User); // true
console.log(User=== sequelize.models.User); // true
(async()=>{
    sequelize.sync({ force: true });
    console.log("hai");
})

console.log("The table for the User model was just (re)created!");

// (async ()=>{
// const jane = await User.create({ name: "Jane" });
// console.log(jane.name); // "Jane"
// console.log(jane.favoriteColor); // "green"
// jane.name = "Jane II";
// jane.favoriteColor = "blue";
// await jane.save({ fields: ['name'] });
// console.log(jane.name); // "Jane II"
// console.log(jane.favoriteColor); // "blue"
// // The above printed blue because the local object has it set to blue, but
// // in the database it is still "green":
// await jane.reload();
// console.log(jane.name); // "Jane II"
// console.log(jane.favoriteColor); // "green"
// })();


