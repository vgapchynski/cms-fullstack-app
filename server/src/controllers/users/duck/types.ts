import * as D from "duck";

export interface IUsersController {
  signUp: (data: {
    email?: string;
    password?: string;
  }) => Promise<Pick<D.IUser, "email" | "_id"> | D.IValidationErrors>;
}
