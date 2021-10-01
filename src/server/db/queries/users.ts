import { Query } from "..";
import { Users } from "../../../../types";

export const find = (column: string, value: string) => Query<Users[]>
    ('SELECT * FROM Users WHERE ?? = ?', [column, value]);
export const insert = (newUser: Users) => Query
    ('INSERT INTO Users SET ?', [newUser]);