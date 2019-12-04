var Comment = require('../models/comment');

module.exports = {
    index,
    create,
    showForm
}

function create(req, res) {
    var comment = new Comment(req.body);
    comment.userName = req.user.name;
    comment.userId = req.user._id;
    comment.save(function(err) {
        if (err) return res.render('sports/new');
        res.redirect('/sports')
    })
};

function showForm(req, res) {
    res.render('sports/new' , {
        title: 'Add Comment To the Sports Page',
        user: req.user,
    })
};

function index(req, res) {
    res.render('sports', { 
        title: "Let's Talk Sports!!!",
        user: req.user
      });
};