exports.create = {
	UserGroup: [
		{ 'name': 'Applicant', 'value': 0 },
    { 'name': 'Member', 'value': 1 },
    { 'name': 'Director', 'value': 2 },
    { 'name': 'Admin', 'value': 3, 'permissions': ['canAccessKeystone'] },
	],
};

exports.create = {
	User: [
		{ 'name.first': 'Admin',
		  'name.last': 'User',
		  'email': 'austinberke@gmail.com',
		  'password': 'admin',
		  'group': 'Admin'
		},
	],
};
