'use strict';

module.exports = {
  //  bulkInsert, insere múltiplos dados na tabela.
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users',
    [
      {
        full_name: 'Leonardo',
        email: 'leo@test.com',
        // CURRENT_TIMESTAMP do SQL, salva a data e hora atual nos campos
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        full_name: 'JEduardo',
        email: 'edu@test.com',
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};