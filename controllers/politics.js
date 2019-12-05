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
        comment.commentText = req.body.comment;
        comment.save(function(err) {
            if (err) return res.render('politics/edit');
            res.redirect('/politics');
        })
    })
};

function edit(req, res) {
    Comment.findById(req.params.id, function(err, comment){
        res.render('politics/edit', {
            title: 'Edit Comment',
            user: req.user,
            comment,
        })
    })
};

function deleteComment(req, res) {
    Comment.deleteOne({ '_id': req.params.id }, function (err, comment) {
        res.redirect('/politics')
    })
};

function create(req, res) {
    var comment = new Comment(req.body);
    comment.avatar = req.user.avatar;
    comment.userName = req.user.name;
    comment.userId = req.user._id;
    comment.user = req.user
    comment.category = 'Politics';
    comment.save(function (err) {
        if (err) return res.render('politics/new');
        res.redirect('/politics')
    })
};

function showForm(req, res) {
    res.render('politics/new', {
        title: 'Add Comment To the Politics Page',
        user: req.user,
    })
};

function index(req, res) {
    let name;
    if(req.user){
        name = req.user.name
    }
    Comment.find({category: "Politics"})
        .exec(function (err, comment) {
            if (err) return next(err);
            res.render('politics/index', {
                title: "Let's Talk Politics!!!",
                user: req.user,
                name,
                comment
            })
        });
    };
