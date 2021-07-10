import bcrypt from "bcryptjs";

export const hashPassword = (password: string) => bcrypt.hashSync(password, 10);

export const comparePassword = (
  unHashedPassword: string,
  hashedPassword: string
):boolean => bcrypt.compareSync(unHashedPassword, hashedPassword);
