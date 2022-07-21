const { Book, User } = require('../database/models');

const UsersBooksService = {
  list: async (id) => {
    const user = await User.findOne({
      where: { userId: id },
      include: [{ model: Book, as: 'books', through: { attributes: [] } }],
    });

    if (!user) {
      const e = new Error('Usuário não encontrado');
      e.name = 'NotFoundError';
      throw e;
    }
    
    return user;
  },
};

module.exports = UsersBooksService;