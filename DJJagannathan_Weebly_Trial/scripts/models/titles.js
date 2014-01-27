//Creates Title Model and Populates
Weeblys.Title = DS.Model.extend({
	contentTitle: DS.attr('string'),
});

Weeblys.Title.FIXTURES = [
	{
		id: 1,
		contentTitle: 'ADD TITLE HERE'
	}
];