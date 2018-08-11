var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Group Model
 * ==========
 */
var UserGroup = new keystone.List('UserGroup', {
	autokey: { from: 'name', path: 'key', unique: true },
	path: 'Users'
});

UserGroup.add({
	name: { type: Types.Text, required: true, initial: true, index: true },
	value: { type: Types.Number, required: true, initial: true, unique: true, index: true },
	permissions: { type: Types.TextArray, required: false }
});

/**
 * Relationships
 */
UserGroup.relationship({ ref: 'User', path: 'user', refPath: 'group' });

/**
 * Registration
 */
UserGroup.defaultColumns = 'name, value';
UserGroup.register();
