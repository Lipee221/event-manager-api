var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createUser, getUsers } from '../services/user.service';
// Controlador de criação de usuário
export const createUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body; // Dados do usuário recebidos no corpo da requisição
        const user = yield createUser(userData); // Chama o serviço de criação de usuário
        return res.status(201).json(user); // Retorna o usuário criado com status 201
    }
    catch (error) {
        next(error); // Passa o erro para o middleware de erro do Express
    }
});
// Controlador para obter todos os usuários
export const getUsersController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield getUsers(); // Chama o serviço para obter os usuários
        return res.json(users); // Retorna a lista de usuários
    }
    catch (error) {
        next(error);
    }
});
