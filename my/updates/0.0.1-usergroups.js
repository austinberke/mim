exports.create = {
	UserGroup: [
		{ 'name': 'Applicant', 'value': 0 },
    { 'name': 'Member', 'value': 1 },
    { 'name': 'Director', 'value': 2, 'permissions': ['canAccessDirectorPanel', 'canDoOtherThings'] },
	],
};
