import { Router } from 'express'

const userRouter = Router(); 

userRouter.post("/register");

userRouter.post("/login");

userRouter.get("/profile");

userRouter.patch("/update-info");

userRouter.patch("/update-email")

userRouter.patch("/update-password");

userRouter.delete("/remove-user");

export default userRouter;