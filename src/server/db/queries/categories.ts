import { Query } from "..";

export const get_all = () => Query
    ('SELECT * FROM Categories');
export const get_one = (id: number) => Query
    ('SELECT * FROM Categories WHERE id=?', [id]);
