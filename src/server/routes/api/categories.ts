import * as express from 'express';
import { get_one, get_all } from '../../db/queries/categories';
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const categories = await get_all();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching all categories', error: error.message });
    }
});
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [category] = await get_one(Number(id));
        res.json(category);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching one category', error: error.message });
    }
});
export default router;