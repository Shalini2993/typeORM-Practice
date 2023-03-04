import { EntitySchema } from "typeorm";

export interface Person {
    id: Number,
    name: String,
    age: Number
}

export const PersonEntity = new EntitySchema({
    name: 'Person',
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true
        },
        name: {
            type: String,
            length: 20
        },
        age: {
            type: Number,
            nullable: false
        }
    },
    checks: [
        {
            expression: `"age" > 18`
        }
    ]
})
