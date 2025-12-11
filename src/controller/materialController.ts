import { Request, Response } from "express"
import { materialService } from "../services/materialService"

class MaterialController {
    async criar(req: Request, res: Response) {
    try {
        const id_usuario = Number(req.body.id_usuario);
        const novo = await materialService.criar(id_usuario, req.body);
        res.json(novo);
    } catch (err: any) {
        console.error(err);
        res.status(400).json({ erro: err.message });
    }
}

    async listar(req: Request, res: Response) {
    try {
        const lista = await materialService.listar();
        res.json(lista);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Erro ao listar materiais" });
    }
}

}
export const materialController = new MaterialController();
