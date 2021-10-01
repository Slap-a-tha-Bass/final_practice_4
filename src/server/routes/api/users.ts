import * as express from 'express';
import * as passport from 'passport';
import { ReqUsers } from '../../../../types';

const router = express.Router();

router.get('/',passport.authenticate('jwt'), async (req: ReqUsers, res) => {
    try {
        res.json(`Welcome, ${req.user.email}`)
    } catch (error) {
        res.status(500).json({ message: "Req.user error"});
    }
});

export default router;