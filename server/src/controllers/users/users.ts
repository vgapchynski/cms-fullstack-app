import * as LD from "./duck";
import bcrypt from "bcrypt";
import * as D from "duck";
import jsonwebtoken from "jsonwebtoken";
import { UsersModel } from "models";

const wrongCredentialsError = {
  errors: {
    common: D.VALIDATION_MESSAGES.wrongCredentials,
  },
};

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
  signIn: async (data) => {
    try {
      const user = await UsersModel.findOne({ email: data.email });

      if (!user) {
        return wrongCredentialsError;
      }

      const isValidPassword = await bcrypt.compare(
        data.password,
        user.password
      );

      if (!isValidPassword) {
        return wrongCredentialsError;
      }

      const token = jsonwebtoken.sign(
        { _id: user._id },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "1 day" }
      );

      return { token: token, _id: user._id, email: user.email };
    } catch (e) {
      return {
        errors: {
          common: D.VALIDATION_MESSAGES.default,
        },
      };
    }
  },
  findOne: async (id: string) => {
    try {
      const user = await UsersModel.findOne({ _id: id });

      if (!user) {
        throw new Error(D.VALIDATION_MESSAGES.notFound);
      }

      return {
        _id: user._id,
        email: user.email,
      };
    } catch (e) {
      return { errors: e.message };
    }
  },
};

export default UsersController;
