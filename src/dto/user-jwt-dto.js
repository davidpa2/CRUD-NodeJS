import { jwtVerify } from 'jose';

const userJWTDTO = async (req, res, next) => {
    const { authorization } = req.header;
    
    if (!authorization) return res.status(402).send('Usuario no autorizado');

    try {
        const encoder = new TextEncoder();
        const { payload } = await jwtVerify(authorization, encoder.encode(process.env.JWT_PRIVATE_KEY));

        req.id = payload.id;

        next();
    } catch (error) {
        return res.status(402).send('Usuario no autorizado');
    }
}

export default userJWTDTO;