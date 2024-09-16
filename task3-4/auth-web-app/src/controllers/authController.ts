import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import { User } from '../models/user';

export const register = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    const userRepository = getRepository(User);
    const existingUser = await userRepository.findOne({ where: { username } });
    
    if (existingUser) {
        return res.status(400).json({ message: 'Username already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = userRepository.create({ username, password: hashedPassword });
    await userRepository.save(newUser);

    res.status(201).json({ message: 'User registered successfully' });
};

export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const userRepository = getRepository(User);
    const user = await userRepository.findOne({ where: { username } });

    if (!user) return res.status(400).json({ message: 'User not found' });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(401).json({ message: 'Invalid password' });

    const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1h' });
    res.json({ token });
};