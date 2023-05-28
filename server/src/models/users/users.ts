import bcrypt from "bcrypt";
import * as D from "duck";
import mongoose from "mongoose";
import validator from "validator";

const usersSchema = new mongoose.Schema<D.IUser>({
  email: {
    type: String,
    required: [true, D.VALIDATION_MESSAGES.required("Email")],
    trim: true,
    validate: [validator.isEmail, D.VALIDATION_MESSAGES.wrongFormat("Email")],
    unique: true,
  },
  password: {
    type: String,
    required: [true, D.VALIDATION_MESSAGES.required("Password")],
    trim: true,
  },
});

usersSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  try {
    this.password = await bcrypt.hash(this.password, 10);
    return next();
  } catch (e) {
    return next(e);
  }
});

const UsersModel = mongoose.model<D.IUser>("users", usersSchema);

export default UsersModel;
