import { db } from '../config/db.js';
import { users } from '../db/schema.js';
import { eq } from 'drizzle-orm';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Helper to look up a user by email
export const findUserByEmail = async (email) => {
  const [user] = await db.select().from(users).where(eq(users.email, email));
  return user || null;
};

// Handle Registration (hashes password before saving)
export const registerUser = async ({ name, email, password }) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const [newUser] = await db
    .insert(users)
    .values({ name, email, password: hashedPassword })
    .returning({ id: users.id, name: users.name, email: users.email });

  return newUser;
};

// Handle Login (verifies password and signs a token)
export const loginUser = async (user, password) => {
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return null;

  // Generate JWT Token
  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );

  return token;
};