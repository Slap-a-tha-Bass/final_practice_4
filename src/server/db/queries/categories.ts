import { Query } from "..";
import { Categories } from "../../../../types";

export const get_all = () => Query<Categories[]>
    ('SELECT * FROM Categories');
export const get_one = (id: number) => Query<Categories[]>
    ('SELECT * FROM Categories WHERE id=?', [id]);
