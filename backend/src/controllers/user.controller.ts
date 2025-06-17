import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/User";

const userRepository = AppDataSource.getRepository(User);

export const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users = await userRepository.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Error fetching users" });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await userRepository.findOneBy({ id: req.params.id });
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Error fetching user" });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, photoUrl, bio } = req.body;

    const user = userRepository.create({ name, email, photoUrl, bio });
    await userRepository.save(user);

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Error creating user" });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email, photoUrl, bio } = req.body;

    const user = await userRepository.findOneBy({ id });
    if (!user) return res.status(404).json({ error: "User not found" });

    user.name = name ?? user.name;
    user.email = email ?? user.email;
    user.photoUrl = photoUrl ?? user.photoUrl;
    user.bio = bio ?? user.bio;

    await userRepository.save(user);

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Error updating user" });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const user = await userRepository.findOneBy({ id });
    if (!user) return res.status(404).json({ error: "User not found" });

    await userRepository.remove(user);

    res.json({ message: "User deleted", user });
  } catch (error) {
    res.status(500).json({ error: "Error deleting user" });
  }
};
