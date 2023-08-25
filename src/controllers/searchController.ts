import { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObject";
import { Pet } from '../models/pet'
import { Op } from 'sequelize';

export const search = async (req: Request, res: Response) => {

    let query: string = req.query.q as string;

    if (!query) {
        res.redirect('/');
        return;
    }

    let list = await Pet.findAll({
        where: {
            name: {
                [Op.like]: `${query}%`
            }
        }
    });

    res.render(`pages/page`, {
        menu: createMenuObject(''),
        list,
        query,
    });
}