var keystone = require('keystone');
Types = keystone.Field.Types;

/**
 * About Model
 * ==================
 */

var About = new keystone.List('About', {
	autokey: { from: 'title', path: 'key', unique: true }
});

About.add({
	title: { type: Types.Text, required: true, initial: true },
  content: {type: Types.Html, wysiwyg: true, height: 250}
});

About.defaultColumns = 'title';

About.register();
