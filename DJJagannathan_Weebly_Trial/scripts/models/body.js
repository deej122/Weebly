//Creates Body Model and Populates
Weeblys.Body = DS.Model.extend({
	contentBody: DS.attr('string'),
});

Weeblys.Body.FIXTURES = [
	{
		id: 1,
		contentBody: 'BODY'
	}
];