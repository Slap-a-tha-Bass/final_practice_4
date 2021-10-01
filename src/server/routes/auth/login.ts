import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import { ReqUsers } from '../../../../types';
import { jwtConfig } from '../../config';
const router = express.Router();

router.post('/', async (req: ReqUsers, res) => {
    
    try {
        const token = jwt.sign({ userid: req.user.id, email: req.user.email, role: 'guest'},
        jwtConfig.secret,
        {expiresIn: jwtConfig.expires})
        res.json(token);
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error: error.message });
    }
});

export default router;