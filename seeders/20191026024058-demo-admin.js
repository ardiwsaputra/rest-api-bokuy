'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
  {
    return queryInterface.bulkInsert(
      'admins',
      [
        {
          email: 'johni@gmail.com',
          password: '123',
          createdAt: new Date(),
          updatedAt: new Date(),
          name: 'Johni Kecil',
          username: 'johni',
          image: '',
        },
        {
          email: 'ardi@gmail.com',
          password: '123',
          createdAt: new Date(),
          updatedAt: new Date(),
          name: 'Ardi W Saputra',
          username: 'ardiwsaputra',
          image: '',
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) =>
  {
    return queryInterface.bulkDelete('admins', null, {});
  },
};
