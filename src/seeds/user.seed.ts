import mongoose = require('mongoose');
import { Model } from 'mongoose';
import { User } from '../user/user.model';
import { Logger } from '@nestjs/common';


const MONGO_URL = process.env.DATABASE_URL;
const logger = new Logger(); 

async function createUser() {
  await mongoose.connect(MONGO_URL);
  const user = {
    username: 'rick',
    password: 'Pa12345678',
    //coordinates: [],
  };
  const newUser = new Model<User>(user);
  const userCreated = await newUser.save();
  logger.log('User created:', userCreated);
  mongoose.connection.close();
}

createUser();