const UsersBooksService = require('../services/UsersBooksService');

const Usersbooks = {
  list: async (req, res) => {
    const { id } = req.params;
    const user = await UsersBooksService.list(id);

    res.status(200).json(user);   
  },
};

module.exports = Usersbooks;
