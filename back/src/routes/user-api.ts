import {Router} from 'express'
import conn from '../core/mysql'

const Api = Router()
.post('/create-user', async (req, res) => {
    const { email, password, name } = req.body
    conn.query(
        'INSERT INTO user (email, password, name) VALUES (?, ?, ?)', 
        [email, password, name],
        (err, result) => {
            if (err) {
                return res.json(false)
            }

            return res.json(true)
        })
})

export default Api