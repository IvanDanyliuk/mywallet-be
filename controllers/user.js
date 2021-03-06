import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

export const getUser = async (req, res) => {

};

export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if(!existingUser) {
      return res.status(404).json({ message: 'User does not exist.' });
    }

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
    if(!isPasswordCorrect) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }

    const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: '1h' });
    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
};

export const signup = async (req, res) => {
  const { firstName, lastName, avatar, currency, language, email, password, confirmPassword } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if(existingUser) {
      return res.status(400).json({ message: 'User already exists.' });
    }
    if(password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords don\'t match.' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await User.create({ email, password: hashedPassword, firstName, lastName, avatar, currency, language });
    const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: '1h' });
    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id: _id, updatedUser } = req.body;
    await User.findByIdAndUpdate(_id, { ...updatedUser, _id}, { new: true });
    res.status(200).json('User data has been updated successfully');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {

};


export const updatePassword = async (req, res) => {
  try {
    const { id, curPassword, newPassword } = req.body;
    const user = await User.findById(id);
    const isPasswordMatch = await bcrypt.compare(curPassword, user.password);

    if(isPasswordMatch) {
      const hashedNewPassword = await bcrypt.hash(newPassword, 12);
      await User.findByIdAndUpdate(id, { ...user._doc, password: hashedNewPassword }, { new: true });
      res.status(200).json(hashedNewPassword);
    } else {
      res.status(200).json('Passwords don\'t match.');
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const setLanguage = async (req, res) => {
  try {
    const { id, language } = req.body;
    const user = await User.findById(id);
    await User.findByIdAndUpdate(id, { ...user._doc, language }, { new: true });
    res.status(200).json(language);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const setCurrency = async (req, res) => {
  try {
    const { id, currency } = req.body;
    const user = await User.findById(id);
    await User.findByIdAndUpdate(id, { ...user._doc, currency }, { new: true });
    res.status(200).json(currency);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};