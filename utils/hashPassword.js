import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
  const round = 10;
  const hashed = await bcrypt.hash(password, round)
  return hashed;
}

export const comparePassword = async (password, hashed) => {
  return await bcrypt.compare(password, hashed)
}