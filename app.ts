import express, {Express, Request, Response} from 'express';

const app: Express = express();

app.use(express.json());

app.get('/health', (req: Request, res: Response) => {
    return res.send('OK!');
});

app.get('*', (req: Request, res: Response) => {
    return res.send('BAD PATH!');
})

app.listen(3000, () => console.log('Listening on port 3000...'));