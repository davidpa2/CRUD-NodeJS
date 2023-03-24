import { Type } from "@sinclair/typebox";

export const idDTOSchema = Type.String({
    format: 'uuid',
    errorMessage: {
        type: 'El tipo de _id no es válido, debe ser un string',
        format: 'El formateo de _id no es válido, debe ser un uuid4'
    }
});

export const nameDTOSchema = Type.String({
    minLength: 2,
    maxLength: 20,
    errorMessage: {
        minLength: 'El nombre debe tener al menos dos caracteres de longitud',
        maxLength: 'El nombre debe tener como máximo veinte caracteres de longitud'
    }
});

export const surnameDTOSchema = Type.String({
    minLength: 4,
    maxLength: 50,
    errorMessage: {
        minLength: 'El apellido debe tener al menos cuatro caracteres de longitud',
        maxLength: 'El apellido debe tener como máximo cincuenta caracteres de longitud'
    }
});

export const emailDTOSchema = Type.String({
    format: 'email',
    errorMessage: {
        type: 'El tipo de email no es válido, debe ser un string',
        format: 'El formato de email no es válido, debe cumplir el RFC 5322'
    }
});

export const passwordDTOSchema = Type.String({
    format: 'password',
    minLength: 10,
    maxLength: 25,
    errorMessage: {
        type: 'El tipo de la contraseña no es válido, debe ser un string',
        format: 'El formato de la contraseña debe contener, como mínimo, una mayúscula, una minúscula y un número',
        minLength: 'La contraseña debe tener al menos diez caracteres de longitud',
        maxLength: 'La contraseña debe tener como máximo veinticinco caracteres de longitud'
    }
})