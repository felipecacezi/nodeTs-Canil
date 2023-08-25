interface ArFormCreate {
    pet_type: string,
    name: string,
    color: string,
    sex: string
}

interface ArFormUpdate {
    id: number,
    pet_type: string,
    name: string,
    color: string,
    sex: string
}

const errorStatusCode = 400;

export const formValidatorCreate = (data: ArFormCreate) => {

    if (!data.pet_type || data.pet_type === 's') {
        return {
            errorStatusCode,
            message: 'O campo tipo do pet é obrigatório'
        }
    }

    if (!data.name) {
        return {
            errorStatusCode,
            message: 'O campo raça é obrigatório'
        }
    }

    if (!data.color) {
        return {
            errorStatusCode,
            message: 'O campo cor é obrigatório'
        }
    }

    if (!data.sex || data.sex === 's') {
        return {
            errorStatusCode,
            message: 'O campo imagem é obrigatório'
        }
    }
    return false;
}

export const formValidatorUpdate = (data: ArFormUpdate) => {

    if (!data.id) {
        return {
            errorStatusCode,
            message: 'Pet não encontrado.'
        }
    }

    if (!data.pet_type || data.pet_type === 's') {
        return {
            errorStatusCode,
            message: 'O campo tipo do pet é obrigatório'
        }
    }

    if (!data.name) {
        return {
            errorStatusCode,
            message: 'O campo raça é obrigatório'
        }
    }

    if (!data.color) {
        return {
            errorStatusCode,
            message: 'O campo cor é obrigatório'
        }
    }

    if (!data.sex || data.sex === 's') {
        return {
            errorStatusCode,
            message: 'O campo imagem é obrigatório'
        }
    }
    return false;
}