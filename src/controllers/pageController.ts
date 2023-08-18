import { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObject"
import { Pet } from '../models/Pet'

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
