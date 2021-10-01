import { Query } from "..";
import { Books } from "../../../../types";

export const get_all = () => Query<Books[]>
    ('SELECT * FROM Books');
export const get_one = (id: number) => Query<Books[]>
    ('SELECT * FROM Books WHERE id=?', [id]);
export const post_one = (newBook: Books, id: number) => Query
    ('INSERT INTO Books Set ?', [newBook, id]);
export const edit_one = (editBook: Books, id: number) => Query
    ('UPDATE Books SET ? WHERE id=?', [editBook, id]);
export const delete_one = (id: number) => Query
    ('DELETE FROM Books WHERE id=?', [id]);


