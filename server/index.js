const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const app = express();
const port = 3000
connectDB();
app.use(cors());
app.use(express.json());
app.use('/api/member', require('./routes/member'))

app.get('/', (req, res) => {
    res.send('Hello Phat')
})

app.listen(port, () => {
    console.log('Running port ' + port);
})