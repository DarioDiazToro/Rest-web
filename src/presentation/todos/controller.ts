import { Request, Response } from "express";



export class TodosController {

    constructor() { }

    public getTodos = (req: Request, res: Response) => {
        res.json([
            { id: 1, text: "Buy milk", createAt: new Date() },
            { id: 2, text: "Buy milk", createAt: new Date() },
            { id: 2, text: "Buy milk", createAt: new Date() },
            { id: 3, text: "Buy milk", createAt: null }
        ]);
    };

};