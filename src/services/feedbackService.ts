import { feedbackRepository } from "../repositories/FeedbackRepository";
 
class FeedbackService {
    async criar(id_usuario: number, data: any){
    return feedbackRepository.create(
        id_usuario,
        data.mensagem,
    );
    }
    async listar() {
        return feedbackRepository.findAll();
    }
    }
    export const feedbackService = new FeedbackService();
