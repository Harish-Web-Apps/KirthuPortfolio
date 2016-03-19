var keystone = require('keystone');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

  locals.data = {
    abouts:[]
  };

	//Load about contents
	view.on('init', function(next) {

		var q = keystone.list('About').model.find();

		q.exec(function(err, result) {
			locals.data.abouts = result;
			next(err);
		});

	});

	// Render the view
	view.render('about');

};
