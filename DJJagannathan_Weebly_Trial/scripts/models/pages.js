//Creates Page Model and Populates
Weeblys.Page = DS.Model.extend({
	title: DS.attr('string'),
	isSelected: DS.attr('boolean'),
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
