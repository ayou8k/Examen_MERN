const router = require('express').Router();
let User = require('../models/user.model');
//user add
router.route('/').post((req, res) => {
  const username = req.body.username;
  const gender = req.body.gender;
  const news = req.body.news;
  const email = req.body.email;
  const photo = req.body.photo;
  const DOB = req.body.DOB
  const newUser = new User({username,gender,news,email,photo,DOB});
  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});
//user get
router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});
// user update
router.route('/:id').put((req, res) => {
  User.findById(req.params.id)
    .then(user => {
      user.username = req.body.username;
      user.gender = req.body.gender;
      user.news = req.body.news;
      user.email = req.body.email;
      user.photo = req.body.photo;
      user.date = Date.parse(req.body.DOB);

      user.save()
        .then(() => res.json('User updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
//user delete 
router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
//user pagination limit
router.route('/:page/:size').get((req, res) => {
let page=req.params.page|| 1;
let size=req.params.size;
// User.find.skip(page).limit(size).then(users => res.json(users))
//     .catch(err => res.status(400).json('Error: ' + err));
User.find().then(users =>  res.json(posts.slice(page * size - size, page * size)))
     .catch(err => res.status(400).json('Error: ' + err));
});
//get all users
router.route('/').get((req, res) => {
  User.find()
        .then(users => res.json(users))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;