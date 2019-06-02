const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

require('dotenv').config()

const { CLIENT_ORIGIN, PORT } = require('./config');

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());


const board = {
    cards: [
        {
            title: "News Article Title",
            image: "https://pixel.nymag.com/imgs/daily/vulture/2019/05/28/28-kit-harrington.w1200.h630.jpg",
            author: "Famous Author",
            date: "June 4, 1994",
            text: "Here's a bunch of article text from the news article that you wanted to read"
        },
        {
            title: "News Article Title",
            image: "https://pixel.nymag.com/imgs/daily/vulture/2019/05/28/28-kit-harrington.w1200.h630.jpg",
            author: "Famous Author",
            date: "June 4, 1994",
            text: "Here's a bunch of article text from the news article that you wanted to read"
        },
        {
            title: "News Article Title",
            image: "https://pixel.nymag.com/imgs/daily/vulture/2019/05/28/28-kit-harrington.w1200.h630.jpg",
            author: "Famous Author",
            date: "June 4, 1994",
            text: "Here's a bunch of article text from the news article that you wanted to read"
        }
    ]
}

app.get('/api/board', (req, res) => {
    res.json(board);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = { app };