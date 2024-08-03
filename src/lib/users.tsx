// src/lib/users.ts

import bcrypt from 'bcrypt';

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

let users: User[] = [];

export const createUser = async (name: string, email: string, password: string): Promise<User> => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser: User = {
    id: Date.now().toString(),
    name,
    email,
    password: hashedPassword,
  };
  users.push(newUser);
  return newUser;
};

export const findUserByEmail = (email: string): User | undefined => {
  return users.find(user => user.email === email);
};

export const validatePassword = async (user: User, inputPassword: string): Promise<boolean> => {
  return bcrypt.compare(inputPassword, user.password);
};