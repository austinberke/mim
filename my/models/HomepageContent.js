var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Homepage Content Model
 * ==========
 */

var HomepageContent = new keystone.List('HomepageContent', {
	map: { name: 'title' },
});

HomepageContent.add({
	title: { type: String, required: true },
	content: {
		type: Types.Html,
		wysiwyg: true,
		height: 400
	},
	order: { type: String }
});

HomepageContent.schema.virtual('content.full').get(function () {
	return this.content;
});

HomepageContent.register();
