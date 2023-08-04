import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
    //res.render(`pages/page`);
    res.send('home no Controller');
}

export const dogs = (req: Request, res: Response) => {
    //res.render(`pages/page`);
    res.send('home no Controller');
}

export const cats = (req: Request, res: Response) => {
    //res.render(`pages/page`);
    res.send('home no Controller');
}

export const fishes = (req: Request, res: Response) => {
    //res.render(`pages/page`);
    res.send('home no Controller');
}
