import { App } from 'https://deno.land/x/attain/mod.ts';

const app = new App();
const PORT = 4040;

// ALL DATA ARE STATIC

interface Book {
    name: String,
    description: String,
}

let data: Array<Book> = [
    {
        name: 'KNY',
        description: 'Kimetsu No Yaiba'
    },
    {
        name: 'Naruto',
        description: 'Naruto'
    },
    {
        name: 'Oregairu',
        description: 'Oregairu'
    },
]


app.get('/', (req, res) => {
    res.send(data)
})

app.listen({port: PORT});
console.log(`Serving on ${PORT}`);

