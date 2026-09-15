import bcrypt from "bcrypt";
import User from "../model/User.js";

export const registerUser = async (userData) => {
  const { name, email, password, phone } = userData;

  // Check if user already exists
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new Error("User already exists");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user
  const user = await User.create({
    name,
    email,
    phone,
    password: hashedPassword,
  });

  // Don't return password
  return {
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    phone: user.phone
  };
};

export const loginUser = async (email, password) => {
  // Find user
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Invalid email or password");
  }

  // Compare password
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Invalid email or password");
  }

  return user;
};


// Get Profile
export const getProfile = async (userId) => {
  const user = await User.findById(userId).select("-password");

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

// Update Profile
export const updateProfile = async (userId, data) => {
  const { name, phone } = data;

  const user = await User.findById(userId);

  if (!user) {
    throw new Error("User not found");
  }

  const newUser = await User.findByIdAndUpdate(
    userId,
    data,
    {
      new: true,
      runValidators: true,
    }
  );
  return {
    _id: newUser._id,
    name:newUser.name,
    email: newUser.email,
    phone: newUser.phone,
    role: newUser.role,
  };
};