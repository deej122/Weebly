//Main Route
Weeblys.Router.map(function() {
	this.resource('weeblys', {path: '/'});
});

//Displaying Page Info
Weeblys.WeeblysRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('Page');
	}
});

//Displaying Title Info
Weeblys.WeeblysTitleRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('Title');
	}
});

//Displaying Body Info
Weeblys.WeeblysBodyRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('Body');
	}
});