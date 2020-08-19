import  express from 'express'
import  {querys} from '../db/db'

const router = express.Router();


/**
 * efetua uma pesquisa na tabela tblogin no banco,
 * basta informa uma parte do nome ou do login na url,
 * retornara um json com todos os logins referentes a pesquisa
 */

//login?search={pesquisa}
router.get('/login', async(req,res) =>{
    try{
        const search = req.query['search']
        let lista = []
        const logins = await Promise.resolve(querys(`
            SELECT 
                idlogin, nome 
            FROM 
                tblogin 
            WHERE 
                nome LIKE '%${search}%' OR login LIKE '%${search}%'`))
        return res.send(logins)
    }
    catch(err){
        return res.status(400).send(err)
    }
})

export default router