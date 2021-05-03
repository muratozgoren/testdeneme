const app = require('./app')
/* const express = require('express');
require('./db/dbConnection');

//ROUTES
const userRouter = require('./router/userRouter');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRouter);
 */


app.listen(3000, () => {
    console.log("3000 portundan server ayaklandırıldı");
})