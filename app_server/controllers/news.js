var fs = require('fs');

var newsTitles = JSON.parse(fs.readFileSync('./data/news.json', 'utf8'));
var newsTitle2 = JSON.parse(fs.readFileSync('./data/news2.json', 'utf8'));

/* GET news view */
const news = (req, res) => {
    res.render('news', { title: 'Travlr Getaways', newsTitles, newsTitle2 });
};
module.exports = {
    news
};