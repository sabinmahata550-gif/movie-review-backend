import { registerUser, loginUser ,getProfile,updateProfile} from "../services/userService.js";
import { generateToken, verifyToken } from "../utils/jwt.js";

export const register = async (req, res) => {

  try {
    const user = await registerUser(req.body);
    res.status(201).json({
      success: true,
      message: "User registered successfully.",
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await loginUser(email, password);

    const token = generateToken(user);
    res.status(200).json({
      success: true,
      message: "Login successful.",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone:user.phone,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};



// GET Profile
export const profile = async (req, res) => {
  try {
    const user = await getProfile(req.user.id);

    res.status(200).json({
      message: "Profile fetched successfully",
      user,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

// UPDATE Profile
export const update = async (req, res) => {
  try {
    const user = await updateProfile(req.user.id, req.body);

    res.status(200).json({
      message: "Profile updated successfully",
      user,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};