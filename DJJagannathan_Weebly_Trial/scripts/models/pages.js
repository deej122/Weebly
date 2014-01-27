//Creates Page Model and Populates
Weeblys.Page = DS.Model.extend({
	title: DS.attr('string'),
	isSelected: DS.attr('boolean'),
	bodyTitle: DS.hasMany('title'),
	bodyContent: DS.hasMany('body')
});

Weeblys.Page.FIXTURES = [
	{
		id: 1,
		title: 'PAGE',
		isSelected: true,
		bodyTitle: 1,
		bodyContent: 1
	}
];

Weeblys.Title = DS.Model.extend({
	name: DS.attr('string'),
	page: DS.belongsTo('Page')
});

Weeblys.Title.FIXTURES = [
	{
		id: 1,
		name: 'Add Title Here',
		page: 1
	}
];

Weeblys.Body = DS.Model.extend({
	content: DS.attr('string'),
	page: DS.belongsTo('Page')	
});

Weeblys.Body.FIXTURES = [
	{
		id: 1,
		content: 'BODY CONTENT HERERERERERERE',
		page: 1
	}
];
