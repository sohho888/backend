import express, { Request, Response } from 'express'
const app = express()
const port = 5000
app.get('/', (req: Request, res: Response) => {
    res.send('Hello: 88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888!')
    res.send(videos)
})

app.get('/videos', (req: Request, res: Response) => {
    res.send(videos)
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

const videos = [
    { id: 1, title: 'About JS - 01', author: 'it-incubator.eu' },
    { id: 2, title: 'About JS - 02', author: 'it-incubator.eu' },
    { id: 3, title: 'About JS - 03', author: 'it-incubator.eu' },
    { id: 4, title: 'About JS - 04', author: 'it-incubator.eu' },
    { id: 5, title: 'About JS - 05', author: 'it-incubator.eu' },
]  