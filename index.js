import express from 'express';
const app = express();
import { sequelize } from './database/db.connection.js';
import userRouter from './src/modules/user/user.router.js';
import noteRouter from './src/modules/notes/note.router.js';
app.use(express.json());

app.use(userRouter)
app.use(noteRouter)
sequelize.sync();

const port = 3000
app.listen(port,console.log(`app listen to ${port}`));
