var keystone = require('keystone');
Types = keystone.Field.Types;

/**
 * Resume Model
 * ==================
 */

var Resume = new keystone.List('Resume', {
	autokey: { from: 'title', path: 'key', unique: true }
});

Resume.add({
	title: { type: String, required: true, initial: true, index: true },
  category: {type: Types.Select, options: 'work, education, volunteer, skill, language', default: 'work', index: true, initial: true},
  orgName: { type: String, dependsOn: { category: ['work', 'education', 'volunteer'] } },
  fromDate: { type: Types.Date, index: true, dependsOn: { category: ['work', 'education', 'volunteer'] } },
  toDate: { type: Types.Date, index: true, dependsOn: { category: ['work', 'education', 'volunteer'] } },
  location: { type: String, dependsOn: { category: ['work', 'education', 'volunteer'] } },
  logo: { type: Types.CloudinaryImage, dependsOn: { category: ['work', 'education', 'volunteer'] } },
  description: {type: Types.Html, wysiwyg: true, height: 150, dependsOn: { category: ['work', 'education', 'volunteer'] }}
});

Resume.defaultColumns = 'title, category';

Resume.register();
