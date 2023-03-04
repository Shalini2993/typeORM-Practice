import { EntitySchema } from "typeorm";

export interface Category {
    id: number,
    name: String
}

export const CategoryEntity = new EntitySchema({
    name: 'Category',
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true
        },
        name: {
            type: String
        }
    }
})
