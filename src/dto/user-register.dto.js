import { Type } from '@sinclair/typebox';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import addErrors from 'ajv-errors';
import { emailDTOSchema, idDTOSchema, nameDTOSchema, passwordDTOSchema, surnameDTOSchema } from '#Dto/dto-types.js';

const RegisterDTOSchema = Type.Object({
    _id: idDTOSchema,
    name: nameDTOSchema,
    surname: surnameDTOSchema,
    email: emailDTOSchema,
    password: passwordDTOSchema,
}, {
    additionalProperties: false,
    errorMessage: {
        additionalProperties: "Formato del objeto mandado incorrecto"
    }
});

const ajv = new Ajv({ allErrors: true });

ajv.addFormat("password", /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/);

addFormats(ajv, ['email', 'uuid']).addKeyword('kind').addKeyword('modifier');
addErrors(ajv);

const validateSchema = ajv.compile(RegisterDTOSchema);

// Middleware
const userRegisterDTO = (req, res, next) => {
    const isValidDTO = validateSchema(req.body);

    if (!isValidDTO) return res.status(400).send({ errors: validateSchema.errors.map(error => error.message) })

    next();
}

export default userRegisterDTO;