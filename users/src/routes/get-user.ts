import express, { Request, Response } from 'express'
import { db } from '../db'
import { requireAuth } from '@cuconnex/common'


const router = express.Router();



router.get('/api/users', requireAuth, async (req: Request, res: Response) => {

    const id = req.currentUser!.id;

    const user = await db.User.findOne({ where: { id }, attributes: Object.keys(db.User.rawAttributes), include: { association: db.User.associations.interests, attributes: ["description"] } });

    if (!user) {
        res.redirect('/userInfo');
    }


    res.status(200).send(user);
});



export { router as getUserRouter };