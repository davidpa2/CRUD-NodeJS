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

/**
 * @openapi
 * /user/login:
 *   post:
 *     summary: Login to account
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/LoginSchema"
 *     responses:
 *       200:
 *         description: Succesfully logged in!
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/ErrorsSchema"
 *       5XX:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/ErrorsSchema"
 * components:
 *   schemas:
 *     LoginSchema:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: david@gmail.com
 *         password:
 *           type: string
 *           example: 1234
 *       required:
 *         - email
 *         - password
 */
userRouter.post("/login", userLoginDTO, userLoginController);

/**
 * @openapi
 * /user/profile:
 *   get:
 *     security:
 *       - ApiKey: []
 *     summary: Get user info
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: Succesfully logged in!
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/ProfileSchema"
 *       5XX:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/ErrorsSchema"
 * components:
 *   securitySchemes:
 *     ApiKey:
 *       type: apiKey
 *       name: Authorization
 *       in: header
 *   schemas:
 *     ProfileSchema:
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
 *       required:
 *         - _id
 *         - name
 *         - surname
 *         - email
 */
userRouter.get("/profile", userJWTDTO, userProfileController);

/**
 * @openapi
 * /user/update-info:
 *   patch:
 *     security:
 *       - ApiKey: []
 *     summary: Update name and surname from an user
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/UpdateInfoSchema"
 *     responses:
 *       200:
 *         description: Updated user info!
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
 *     UpdateInfoSchema:
 *       type: object
 *       properties:
 *         name: 
 *           type: string
 *           example: David 
 *         surname:
 *           type: string
 *           example: Padilla
 *       required:
 *         - name
 *         - surname
 */
userRouter.patch("/update-info", userJWTDTO, userUpdateInfoDTO, userUpdateInfoController);

/**
 * @openapi
 * /user/update-email:
 *   patch:
 *     security:
 *       - ApiKey: []
 *     summary: Update email from an user
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/UpdateEmailSchema"
 *     responses:
 *       200:
 *         description: Updated user email
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
 *     UpdateEmailSchema:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: david@gmail.com
 *         password:
 *           type: string
 *           example: 1234
 *       required:
 *         - email
 *         - password
 */
userRouter.patch("/update-email", userJWTDTO, userUpdateEmailDTO, userUpdateEmailController)

/**
 * @openapi
 * /user/update-password:
 *   patch:
 *     security:
 *       - ApiKey: []
 *     summary: Update password from an user
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/UpdatePasswordSchema"
 *     responses:
 *       200:
 *         description: Updated user password
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
 *     UpdatePasswordSchema:
 *       type: object
 *       properties:
 *         oldPassword:
 *           type: string
 *           example: 1234
 *         newPassword:
 *           type: string
 *           example: 12345
 *       required:
 *         - oldPassword
 *         - newPassword
 */
userRouter.patch("/update-password", userJWTDTO, userUpdatePasswordDTO, userUpdatePasswordController);

/**
 * @openapi
 * /user/remove-user:
 *   delete:
 *     security:
 *       - ApiKey: []
 *     summary: Remove user account
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/DeleteUserSchema"
 *     responses:
 *       200:
 *         description: Removed user
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
 *     DeleteUserSchema:
 *       type: object
 *       properties:
 *         password:
 *           type: string
 *           example: 1234
 *       required:
 *         - password
 */
userRouter.delete("/remove-user", userJWTDTO, userDeleteDTO, userDeleteController);

export default userRouter;