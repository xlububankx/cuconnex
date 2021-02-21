import express, { Request, Response } from 'express';
import { requireAuth } from '@cuconnex/common';
import { User } from '../models/user.model';



const router = express.Router();



router.post('/api/users/:search', requireAuth, async (req: Request, res: Response) => {

    const users = await User.findAll({ where: { id: req.params.search, $or: [{ name: req.params.searrch }] } });

    res.status(200).send({ lists: users });

});


router.post('/api/users/:userId', requireAuth, async (req: Request, res: Response) => {





});


export { router as addFriendRouter };





