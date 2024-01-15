import User from "../models/user.model";

type UserDataType = {
  username: string;
  email: string;
  password: string;
};

export const registerUser = async (userData: UserDataType) => {
  try {
    return await User.create(userData);
  } catch (error) {
    throw error;
  }
};
