const express = require('express');

const News = require('../models/news');
const router = express.Router();

router.all('*', (req, res, next) => {
  if (!req.session.admin) {
    res.redirect('login');
    return;
  }
  next();
});
/* GET home page. */
router.get('/', (req, res) => {
  console.log(req.session.admin);

  const data = News.find({}, (err, data) => {
    res.render('admin', { title: 'Admin', data });
    console.log(data);
  });

  //  res.render('admin', { title: 'Admin' });
});
router.get('/news/add', (req, res) => {
  console.log(req.session.admin);
  if (req.session.admin) {
    res.render('admin/newsForm', { title: 'Add News' });
  } else {
    res.redirect('login');
  }
});

router.get('/news/delete/:id', (req, res) => {
 News.findByIdAndDelete(req.params.id,(err)=>{
   res.redirect('/admin')
 })
});


router.post('/news/add', (req, res) => {
  console.log(req.body);
  const newNews = News({
    title: req.body.title,
    description: req.body.description,
  });
  newNews.save((err) => {
    if (err) {
      console.log(err);
    }
  });
  res.redirect('/admin');
});

module.exports = router;
