import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  //coordinates: [{ type: Schema.Types.ObjectId, ref: 'Coordinates' }],
});

export interface User {
  username: string;
  password: string;
  //coordinates: [];
}