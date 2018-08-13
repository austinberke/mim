var keystone = require('keystone');
var User = keystone.list('User');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	locals.data = {
		contents: []
	};

	// Grab permissions from User Group
	view.on('init', function (next) {
		var q = User.model.findById(req.user.id).populate('group');

		q.exec(function (err, results) {
			locals.permissions = results.group.permissions;
			next(err);
		});
	});

	// Initialize page data
	view.on('init', function (next) {

		var q = keystone.list('HomepageContent').paginate({
			page: req.query.page || 1,
			perPage: 10,
			maxPages: 10,
		})
			.sort('order');

		q.exec(function (err, results) {
			locals.data.contents = results;
			next(err);
		});

		if (locals.currentUserGroup) {
			locals.currentUserPermissions = locals.currentUserGroup.permissions;
		}
	});

	// Render the view
	view.render('index');
};
