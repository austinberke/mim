var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Page Model
 * ==========
 */

var Page = new keystone.List('Page', {
	map: { name: 'title' },
});

Page.add({
	title: { type: String, required: true },
	content: {
		type: Types.Html,
		wysiwyg: true,
		height: 400
	},
	order: { type: String }
});

Page.schema.virtual('content.full').get(function () {
	return this.content;
});

Page.register();
