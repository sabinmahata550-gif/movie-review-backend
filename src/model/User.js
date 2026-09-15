import mongoose from "mongoose";
import { USER_ADMIN, USER_ROLE } from "../constants/roles.js";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },

        password: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        role: {
            type: String,
            enum: [USER_ROLE, USER_ADMIN],
            default: USER_ROLE,
        }
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);

export default User;