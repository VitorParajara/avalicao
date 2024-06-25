import mysql from "mysql2"
import config from "../Config.js";

class CategoriaModel {
    constructor() {
        this.conexao = mysql.createConnection(config.db);
    }

    create(nome_categoria) {
        let sql = `INSERT INTO categorias VALUES(${null},"${nome_categoria}");`;
        
       return new Promise((resolve,reject)=>{
        this.conexao.query(sql,(erro,retorno)=>{
            if(erro){
                reject([400,erro])
            }
            resolve([201,"Categoria Adicionado"])
        })
       });
    
    }

    read() {
        let sql = `SELECT * FROM categorias;`;
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    reject([400,erro])
                }
                resolve([200,retorno])
            })
        });
    }

    update(id_categoria, nome_categoria) {
        let sql = `update categorias set nome_categoria="${nome_categoria}" where id_categoria = ${id_categoria};`;

        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    reject([400],erro)
                }else if(retorno.affectedRows>0){
                    resolve([200],retorno)
                }else{
                    resolve([404,"Categoria não encontrado"])
                }
                
            })
        });
    }

    delete(id_categoria) {
        let sql = `DELETE FROM categorias WHERE id_categoria = ${id_categoria};`;

        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    reject([400],erro)
                }else if(retorno.affectedRows>0){
                    resolve([200],retorno)
                }else{
                    resolve([404,"Categoria não encontrado"])
                }
            })
        });
    }
}

export default new CategoriaModel();