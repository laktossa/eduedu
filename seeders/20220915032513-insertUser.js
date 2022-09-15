'use strict';
const fs = require('fs')
module.exports = {
   up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     let data = JSON.parse(fs.readFileSync('./dataJson/user.json'))
     let data1 = data.map(el => {
       el.createdAt =  new Date()
       el.updatedAt =  new Date()
       return el
     })
     return queryInterface.bulkInsert("Users",data1,{})
  },

   down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('Users', null, {})
  }
};
