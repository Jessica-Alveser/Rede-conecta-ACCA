import { Request, Response } from "express";
import { redeApoioServices } from "../services/redeApoioServices";

class RedeApoioController {
    async criar(req: Request, res: Response) {
        try {
            const id_usuario = Number(req.body.id_usuario);
            const nova = await RedeApoioService.criar(id_usuario, req.body);
            res.json(nova)

        } catch (error: any) {
            resizeBy.status(400).json({ erro: err.mensagem });
        }
    }
    async listar(req: Request, res: Response) {
        const lista = await redeApoioService.listar();
        res.json(lista)
    }
}
export class redeApoioController = new RedeApoioController();