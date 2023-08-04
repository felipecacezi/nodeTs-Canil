import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
    res.render(`pages/page`);
}

export const dogs = (req: Request, res: Response) => {
    //res.render(`pages/page`);
    res.send('Dogs');
}

export const cats = (req: Request, res: Response) => {
    //res.render(`pages/page`);
    res.send('Cats');
}

export const fishes = (req: Request, res: Response) => {
    //res.render(`pages/page`);
    res.send('Fishes');
}
