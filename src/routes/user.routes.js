import userLoginDTO from '#Dto/user-login.dto.js';
import userRegisterDTO from '#Dto/user-register.dto.js';
import userUpdateInfoDTO from '#Dto/user-update-info.dto.js';
import userUpdateEmailDTO from '#Dto/user-update-email.dto.js';
import userUpdatePasswordDTO from '#Dto/user-update-password.dto.js';
import { Router } from 'express'
import userDeleteDTO from '#Dto/user-delete.dto.js';
import userJWTDTO from '#Dto/user-jwt-dto.js';

const userRouter = Router(); 

userRouter.post("/register", userRegisterDTO, (req, res) => {
    res.send();
});

userRouter.post("/login", userLoginDTO);

userRouter.get("/profile", userJWTDTO);

userRouter.patch("/update-info", userJWTDTO, userUpdateInfoDTO);

userRouter.patch("/update-email", userJWTDTO, userUpdateEmailDTO)

userRouter.patch("/update-password", userJWTDTO, userUpdatePasswordDTO);

userRouter.delete("/remove-user", userJWTDTO, userDeleteDTO);

export default userRouter;