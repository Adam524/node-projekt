const express = require('express');
const router = express.Router();

const login = 'admin';
const password = 'admin';
/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Strona Główna' });
});

router.get('/login', (req, res, next) => {
  res.render('login', { title: 'Strona Główna' });
});

router.post('/login', (req, res) => {
  const { login: rlogin, password: rpassword } = req.body;
  if (login === rlogin && password === rpassword) {
    req.session.admin = 1;
    res.redirect('/admin');
  } else {
    res.redirect('/login');
  }
});

module.exports = router;
