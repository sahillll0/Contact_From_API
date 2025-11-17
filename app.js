import express from 'express'
import { route } from './routes/index.route.js';

const app = express();

app.use(express.json());


app.use("/api/v1", route)


export {app}