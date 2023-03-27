import UserModel from "#Schemas/user.shema.js";

const userUpdateInfoController = async (req, res) => {
    const { id } = req;
    const { name, surname } = req.body;

    const existingUserById = await UserModel.findById(id).exec();
    if (!existingUserById) return res.status(401).send({ errors: ['Usuario no autorizadoooo'] });

    existingUserById.name = name;
    existingUserById.surname = surname;

    await existingUserById.save();

    return res.send('Usuario actualizado');
}

export default userUpdateInfoController