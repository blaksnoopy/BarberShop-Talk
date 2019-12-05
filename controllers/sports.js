var Comment = require('../models/comment');
var User = require('../models/user')

module.exports = {
    index,
    create,
    showForm,
    delete: deleteComment,
    edit,
    update
}

function update(req, res) {
    Comment.findById(req.params.id, function(err, comment) {
        // console.log('This is the it!!!!', comment)
        comment.commentText = req.body.comment;
        comment.save(function(err) {
            if (err) return res.render('sports/edit');
            res.redirect('/sports');
        })
    })
};

function edit(req, res) {
    Comment.findById(req.params.id, function(err, comment){
        res.render('sports/edit', {
            title: 'Edit Comment',
            user: req.user,
            comment,
        })
    })
};

function deleteComment(req, res) {
    Comment.deleteOne({ '_id': req.params.id }, function (err, comment) {
        res.redirect('/sports')
    })
};

function create(req, res) {
    var comment = new Comment(req.body);
    comment.avatar = req.user.avatar;
    comment.userName = req.user.name;
    comment.userId = req.user._id;
    comment.user = req.user
    comment.save(function (err) {
        if (err) return res.render('sports/new');
        res.redirect('/sports')
    })
};

function showForm(req, res) {
    res.render('sports/new', {
        title: 'Add Comment To the Sports Page',
        user: req.user,
    })
};

function index(req, res) {
    let modelQuery = req.query.name ? { name: new RegExp(req.query.name, 'i') } : {};
    Comment.find(modelQuery)
        .exec(function (err, comment) {
            if (err) return next(err);
            res.render('sports', {
                title: "Let's Talk Sports!!!",
                user: req.user,
                name: req.user.name,
                comment
            })
        });
    };
