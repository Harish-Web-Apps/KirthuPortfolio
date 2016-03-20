var keystone = require('keystone');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

  locals.data = {
    listItems:[]
  };

	//Load about contents
	view.on('init', function(next) {

		var q = keystone.list('Resume').model.find().sort('-fromDate').sort('category');

		q.exec(function(err, result) {
			locals.data.listItems = result;
			next(err);
		});

	});

	// Render the view
	view.render('resume');

};
