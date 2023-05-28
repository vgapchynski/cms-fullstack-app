import * as LD from "./duck";
import * as D from "duck";
import { UsersModel } from "models";

const UsersController: LD.IUsersController = {
  signUp: async (data) => {
    try {
      const newUser = await UsersModel.create(data);

      return {
        email: newUser.email,
        _id: newUser._id,
      };
    } catch (e) {
      return D.formatMongooseErrors(e);
    }
  },
};

export default UsersController;
