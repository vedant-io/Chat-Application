import User from "../models/userModel.js";

const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const allUsers = await User.find({ _id: { $ne: loggedInUserId } }).select(
      "-password",
    );

    res.status(200).json({ allUsers });
  } catch (error) {
    console.error(error);
  }
};

export default getUsersForSidebar;
