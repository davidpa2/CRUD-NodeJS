import userLoginDTO from '#Dto/user-login.dto.js';
import userRegisterDTO from '#Dto/user-register.dto.js';
import userUpdateInfoDTO from '#Dto/user-update-info.dto.js';
import userUpdateEmailDTO from '#Dto/user-update-email.dto.js';
import userUpdatePasswordDTO from '#Dto/user-update-password.dto.js';
import { Router } from 'express'
import userDeleteDTO from '#Dto/user-delete.dto.js';

const userRouter = Router(); 

userRouter.post("/register", userRegisterDTO, (req, res) => {
    res.send();
});

userRouter.post("/login", userLoginDTO);

userRouter.get("/profile", );

userRouter.patch("/update-info", userUpdateInfoDTO);

userRouter.patch("/update-email", userUpdateEmailDTO)

userRouter.patch("/update-password", userUpdatePasswordDTO);

userRouter.delete("/remove-user", userDeleteDTO);

export default userRouter;