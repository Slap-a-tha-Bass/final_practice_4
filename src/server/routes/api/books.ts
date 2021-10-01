import * as express from 'express';
import { get_all, get_one, post_one, edit_one, delete_one } from '../../db/queries/books';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const books = await get_all();
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching all books', error: error.message });
    }
});
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [book] = await get_one(Number(id));
        res.json(book);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching all books', error: error.message });
    }
});

export default router;