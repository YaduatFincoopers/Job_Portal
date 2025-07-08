import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ['Candidate', 'Admin'],
      default: 'Candidate',
      required: true
    }
  },
  {
    collection: 'JobPortalUsers',
    timestamps: true
  }
);
const jobschema = model('JobPortalUsers', UserSchema);
export  default jobschema;
