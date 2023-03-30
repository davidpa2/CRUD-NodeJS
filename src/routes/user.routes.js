import { Router } from 'express'
import userLoginDTO from '#Dto/user-login.dto.js';
import userRegisterDTO from '#Dto/user-register.dto.js';
import userJWTDTO from '#Dto/user-jwt-dto.js';
import userRegisterController from '#Controllers/user-register.controller.js';
import userLoginController from '#Controllers/user-login.controller.js';
import userProfileController from '#Controllers/user-profile.controller.js';
import userUpdateInfoDTO from '#Dto/user-update-info.dto.js';
import userUpdateInfoController from '#Controllers/user-update.controller.js';
import userUpdateEmailDTO from '#Dto/user-update-email.dto.js';
import userUpdateEmailController from '#Controllers/user-update-email.controller.js';
import userUpdatePasswordDTO from '#Dto/user-update-password.dto.js';
import userUpdatePasswordController from '#Controllers/user-update-password.controller.js';
import userDeleteDTO from '#Dto/user-delete.dto.js';
import userDeleteController from '#Controllers/user-delete.controller.js';

const userRouter = Router();

/**
 * @openapi
 * /user/register:
 *   post:
 *     summary: Register an user
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/RegisterSchema"
 *     responses:
 *       200:
 *         description: New user registered!
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *       5XX:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/ErrorsSchema"
 * components:
 *   schemas:
 *     RegisterSchema:
 *       type: object
 *       properties:
 *         _id: 
 *           type: string
 *           example: uuid v4
 *         name: 
 *           type: string
 *           example: David 
 *         surname:
 *           type: string
 *           example: Padilla
 *         email:
 *           type: string
 *           example: david@gmail.com
 *         password:
 *           type: string
 *           example: 1234
 *       required:
 *         - _id
 *         - name
 *         - surname
 *         - email
 *         - password
 *  
 *     ErrorsSchema:
 *       type: object
 *       properties:
 *         errors: 
 *           type: array
 *           items: 
 *             type: string
 *             example: Must have required property 'name'
 */
userRouter.post("/register", userRegisterDTO, userRegisterController);

userRouter.post("/login", userLoginDTO, userLoginController);

userRouter.get("/profile", userJWTDTO, userProfileController);

userRouter.patch("/update-info", userJWTDTO, userUpdateInfoDTO, userUpdateInfoController);

userRouter.patch("/update-email", userJWTDTO, userUpdateEmailDTO, userUpdateEmailController)

userRouter.patch("/update-password", userJWTDTO, userUpdatePasswordDTO, userUpdatePasswordController);

userRouter.delete("/remove-user", userJWTDTO, userDeleteDTO, userDeleteController);

export default userRouter;