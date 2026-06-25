import { db } from '../config/db.js';
import { users } from '../db/schema.js';


export const createUser = async (userData) => {
  const [newUser] = await db.insert(users).values(userData).returning();
  return newUser;
};

// export const getUserById = async (userData) => {
//   const [newUser] = await db.insert(users).values(userData).returning();
//   return newUser;
// };

export const getAllUsers = async () => {
  const userList = await db.select().from(users);
  return userList;
};

export const updateUser = async (userId,userData) => {
  const [updatedUser] = await db
    .update(user)
    .set({
      email: userData.email,
      name: userData.name,
    })
    .where(eq(user.id, userId));
  return updatedUser;
};

// export const deleteUser = async (userId) => {
//   const [newUser] = await db.delete(user).where(eq(user.id, userId));
//   return newUser;
// };