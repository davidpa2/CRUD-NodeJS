import { Type } from '@sinclair/typebox';
import Ajv from 'ajv';
import addErrors from 'ajv-errors';
import { nameDTOSchema, surnameDTOSchema } from '#Dto/dto-types.js';

const UpdateInfoDTOSchema = Type.Object({
    name: nameDTOSchema,
    surname: surnameDTOSchema,
}, {
    additionalProperties: false,
    errorMessage: {
        additionalProperties: "Formato del objeto mandado incorrecto"
    }
});

const ajv = new Ajv({ allErrors: true }).addKeyword('kind').addKeyword('modifier');

addErrors(ajv);

const validateSchema = ajv.compile(UpdateInfoDTOSchema);

// Middleware
const userUpdateInfoDTO = (req, res, next) => {
    const isValidDTO = validateSchema(req.body);

    if (!isValidDTO) return res.status(400).send({ errors: validateSchema.errors.map(error => error.message) })

    next();
}

export default userUpdateInfoDTO;