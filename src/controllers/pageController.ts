import { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObject"
import { Pet } from '../models/pet'
import { formValidator } from '../helpers/pageHelper'
import multer from "multer";
import path from "path";

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
    let validation = formValidator(data);
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
