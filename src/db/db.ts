import {Client} from 'pg'


//conexão com o banco de dados
const db = new Client({
    host:"192.168.99.100",
    port:5432,
    database:"db_mer",
    user:"postgres",
    password:"richard",
})


//função que envia as querys para o banco de dados
export async function querys(query:any){
    const dados =  await db.query(query)
    return dados.rows
}

export default db
