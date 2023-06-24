export interface FullUser {
  _id: string;
  email: string;
  password: string;
}

export type User = Omit<FullUser, "password">;
