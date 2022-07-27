import express from "express";
import { login, register } from "../controllers/auth.js";
import User from "../models/User.js";
import { createError } from "../utils/error.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(500).json(createError(404, "User not found!"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return res
        .status(500)
        .json(createError(400, "Wrong password or username!"));

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );

    const { password, isAdmin, ...otherDetails } = user._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ details: { ...otherDetails }, isAdmin });
  } catch (err) {
    console.log(err);
    res.end("Internal server error");
  }
});
// router.post("/temp",(req,res)=>{
//     res.send("hllo")
// })

export default router;
