import express from "express";
import MyUserController from "../controllers/MyUserController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyUserRequest } from "../middleware/validation";

const router = express.Router();

router.get("/", jwtCheck, jwtParse, MyUserController.getCurrentUser);

//  if the request is a post request then it gets forwarded to MyUserController.creatCurrentUser
router.post("/", jwtCheck, MyUserController.creatCurrentUser);
// Update the current User
router.put(
  "/",
  jwtCheck,
  jwtParse,
  validateMyUserRequest,
  MyUserController.updateCurrentUser
);

export default router;
