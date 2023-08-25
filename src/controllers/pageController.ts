import { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObject"
import { Pet } from '../models/pet'
import {
    formValidatorCreate,
    formValidatorUpdate
} from '../helpers/pageHelper';


export const home = async (req: Request, res: Response) => {

    let list = await Pet.findAll();
    res.render(`pages/page`,{
        menu: createMenuObject('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg',
        },
        list
    });
}

export const dogs = async (req: Request, res: Response) => {

    let list = await Pet.findAll({
        where: {
            pet_type: 'dog'
        }
    });

    res.render(`pages/page`,{
        menu:createMenuObject('dog'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg',
        },
        list
    });
}

export const cats = async (req: Request, res: Response) => {

    let list = await Pet.findAll({
        where: {
            pet_type: 'cat'
        }
    });

    res.render(`pages/page`,{
        menu:createMenuObject('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg',
        },
        list
    });
}

export const fishes = async (req: Request, res: Response) => {

    let list = await Pet.findAll({
        where: {
            pet_type: 'fish'
        }
    });

    res.render(`pages/page`,{
        menu:createMenuObject('fish'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg',
        },
        list
    });
}

export const newPet = async (req: Request, res: Response) => {

    let list = await Pet.findAll();

    res.render(`pages/newPet`,{
        menu: createMenuObject('all'),
        banner: {
            title: 'Cadastrar novo pet',
            background: 'allanimals.jpg',
        },
        list
    });
}

export const createPet = async (req: Request, res: Response) => {

    interface RetAr {
        errorStatusCode: number,
        message: string
    }

    const data = req.body;
    let validation = formValidatorCreate(data);
    if (validation) {
        res.status(validation.errorStatusCode)
        .json({
            status: validation.errorStatusCode,
            message: validation.message
        })
    }

    data.image = req.file?.filename;

    try {
        const pet = await Pet.create(data)
        res.status(201)
        .json({
            status: 201,
            message: 'Novo pet criado com sucesso.'
        })
    } catch (error) {
        res.status(500)
        .json({
            status: 500,
            message: 'Ocorreu um erro ao cadastrar um novo'
        })
    }
}

export const deletePet = async (req: Request, res: Response) => {

    let pet = await Pet.findAll({
        where: {
            id: req.params.id
        }
    });

    if (!pet) {
        res.status(400)
        .json({
            status: 400,
            message: 'Não foi possivel excluir o pet selecionado.'
        })
    }

    try {
        await Pet.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200)
        .json({
            status: 200,
            message: 'Pet excluído com sucesso.'
        })
    } catch (error) {
        res.status(500)
        .json({
            status: 500,
            message: 'Ocorreu um erro ao deletar o pet delecionado.'
        })
    }

}

export const editPet = async (req: Request, res: Response) => {

    const pet = await Pet.findAll({
        where: {
            id: req.params.id
        }
    });

    let pet_type = [
        {
            selected: '',
            value: 'dog',
            name: 'Dog',
        },
        {
            selected: '',
            value: 'cat',
            name: 'Cat',
        },
        {
            selected: '',
            value: 'fish',
            name: 'Fish',
        }
    ];

    let sex = [
        {
            selected: '',
            value: 'm',
            name: 'Masculino'
        },
        {
            selected: '',
            value: 'f',
            name: 'Feminino'
        },
    ];

    let petTypeList = pet_type.map( (petType) => {
        if (petType.value === pet[0].pet_type) {
            petType.selected = 'selected';
        } else {
            petType.selected = '';
        }
        return petType;
    } )

    let petSexList = sex.map( (petSex) => {
        if (petSex.value === pet[0].sex) {
            petSex.selected = 'selected';
        } else {
            petSex.selected = '';
        }
        return petSex;
    } )

    if (!pet) {
        res.status(400)
        .json({
            status: 400,
            message: 'Não foi possivel encontrar o pet selecionado.'
        })
    }

    res.render(`pages/editPet`,{
        menu: createMenuObject('all'),
        banner: {
            title: 'Editar pet',
            background: 'allanimals.jpg',
        },
        pet,
        petTypeList,
        petSexList
    });

}

export const updatePet = async (req: Request, res: Response) => {

    const data = req.body;
    const id = data.id;

    let validation = formValidatorUpdate(data);
    if (validation) {
        res.status(validation.errorStatusCode)
        .json({
            status: validation.errorStatusCode,
            message: validation.message
        })
    }

    data.image = req.file?.filename;

    try {
        await Pet.update(
            data,
            {
                where: { id }
            }
        )
        res.status(201)
        .json({
            status: 201,
            message: 'Pet alterado com sucesso.'
        })
    } catch (error) {
        res.status(500)
        .json({
            status: 500,
            message: 'Ocorreu um erro ao altera o pet.'
        })
    }

}