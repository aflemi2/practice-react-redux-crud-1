const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/my_db');

const User = conn.define('users', {
  name: Sequelize.STRING
});

const syncSeed = ()=>{
  conn.sync({ force: true })
  .then( ()=>{
    Promise.all([
      User.create({name: 'Moe'}),
      User.create({name: 'Larry'}),
      User.create({name: 'Curly'}),
      User.create({name: 'Max'}),
    ]);
  });
};

module.exports = {
  syncSeed,
  models: {
    User
  }
};
