const express = require('express');
const router = express.Router();
const News = require('../models/news');

/* GET home page. */
router.get('/', (req, res) => {
  const search = req.query.search;
  console.log(search);

  const findNews = News.find(
    search ? { title: new RegExp(search.trim(), 'i') } : {}
  ).sort({
    date: -1,
  });

  findNews.exec((err, data) => {
    res.render('news', { title: 'News', search, data });
  });
});

module.exports = router;
