import * as express from 'express';
import * as mongoose from 'mongoose';
import * as cors from 'cors';
import * as Routes from './routes/Routes';
import { middleware } from "./security/middleware";
import { json } from 'body-parser';

const app = express();

app.use(cors());
app.use(json());
app.use(middleware);
app.use(Routes)
app.listen(process.env.PORT || 3000, (): void => {
    mongoose.set('useFindAndModify', false);
    mongoose.set('useUnifiedTopology', true);
    mongoose.connect('mongodb://localhost:27017/portfolio', {useNewUrlParser: true}).then( (connection: typeof mongoose) => {
        if (connection) {
            console.log('Node is ready and connected to MongoDB')
        }
    })
});
