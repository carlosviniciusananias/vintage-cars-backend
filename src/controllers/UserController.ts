import User from "../models/User";

const UserController = {
  async userList(req: any, res: any) {
    const users = await User.find();
    res.json(users);
  },

  async userCreate(req: any, res: any) {
    const { user_name, user_car, user_address, user_password } = req.body;

    let data = {
      user_name,
      user_car,
      user_address,
      user_password,
    };

    const users = await User.create(data);

    return res.json(users);
  },
};

export default UserController;
