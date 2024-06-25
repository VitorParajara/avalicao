import mysql from "mysql2"
import config from "../Config.js";

class DoceModel {
    constructor() {
        this.conexao = mysql.createConnection(config.db);
    }

    create(nome_doce, id_categoria) {
        let sql = `INSERT INTO doces VALUES("${null}","${nome_doce}", ${id_categoria});`;
        
       return new Promise((resolve,reject)=>{
        this.conexao.query(sql,(erro,retorno)=>{
            if(erro){
                reject([400,erro])
            }
            resolve([201,"Doce Adicionado"])
        })
       });
    
    }

    read() {
        let sql = `SELECT * FROM doces;`;
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    reject([400,erro])
                }
                resolve([200,retorno])
            })
        });
    }

    update(id_doce, nome_doce, id_categoria) {
        let sql = `update doces set nome_doce="${nome_doce}", id_categoria=${id_categoria} where id_doce = ${id_doce};`;

        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    reject([400],erro)
                }else if(retorno.affectedRows>0){
                    resolve([200],retorno)
                }else{
                    resolve([404,"Doce não encontrado"])
                }
                
            })
        });
    }

    delete(id_doce) {
        let sql = `DELETE FROM doces WHERE id_doce = ${id_doce};`;

        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    reject([400],erro)
                }else if(retorno.affectedRows>0){
                    resolve([200],retorno)
                }else{
                    resolve([404,"Doce não encontrado"])
                }
            })
        });
    }
}

export default new DoceModel();