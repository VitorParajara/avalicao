import { response } from "express";
import CategoriaModel from "../Models/CategoriaModel.js";

class CategoriaController {
    constructor() {
    }

    create(req, res) {
        const nome_categoria = req.body.nome_categoria;
        CategoriaModel.create(nome_categoria).then(
            resposta => {
                console.debug("Inserindo Categoria");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("ERRO: Inserindo Categoria");
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    read(req, res) {
        CategoriaModel.read().then(
            resposta => {
                console.debug("Mostrando Categoria");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("ERRO: Mostrando Categoria");
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    update(req, res) {
        const id_categoria = req.params.id_categoria;
        const nome_categoria = req.body.nome_categoria;

        CategoriaModel.update(id_categoria,nome_categoria).then(
            resposta => {
                console.debug("Atualizando Categorias");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("ERRO: Atualizando Categorias");
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    delete(req,res){
        const id_categoria = req.params.id_categoria;
        
        CategoriaModel.delete(id_categoria).then(
            resposta => {
                console.debug("Categoria Deletado");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("ERRO: Categoria Deletado");
                res.status(resposta[0]).json(resposta[1])
            }
        );
    }
}

export default new CategoriaController();