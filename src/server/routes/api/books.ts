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
        res.status(500).json({ message: 'Error fetching one book', error: error.message });
    }
});
router.post('/', async (req, res) => {
    let id = 0;
    const { title, author, price, categoryid } = req.body;
    const newBook = { title, author, price, categoryid }
    try {
        await post_one(newBook, id++);
        res.json({ message: 'Book created!'});
    } catch (error) {
        res.status(500).json({ message: 'Error posting book', error: error.message });
    }
});
router.put('/:id/edit', async (req, res) => {
    const { id } = req.params;
    const { title, author, price, categoryid } = req.body;
    const editBook = { title, author, price, categoryid }
    try {
        await edit_one(editBook, Number(id))
        res.json({ message: 'Book edited!'});
    } catch (error) {
        res.status(500).json({ message: 'Error editing book', error: error.message });
    }
});
router.delete('/:id/delete', async (req, res) => {
    const { id } = req.params;
    try {
        await delete_one(Number(id));
        res.json({ message: 'Book deleted!'});
    } catch (error) {
        res.status(500).json({ message: 'Error deleting book', error: error.message });
    }
});
export default router;