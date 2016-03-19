var keystone = require('keystone');
Types = keystone.Field.Types;

/**
 * Project Model
 * ==================
 */

var Project = new keystone.List('Project', {
	autokey: { from: 'title', path: 'key', unique: true }
});

Project.add({
	title: { type: Types.Text, required: true, initial: true , index: true},
  images: {type: Types.CloudinaryImages},
  info: {type: Types.Html, wysiwyg: true, height: 150}
});

Project.defaultColumns = 'title';

Project.register();
