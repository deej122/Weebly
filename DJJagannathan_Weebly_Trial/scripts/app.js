//Creating Application
window.Weeblys = Ember.Application.create();

//Allows for Local Storage
Weeblys.ApplicationAdapter = DS.FixtureAdapter.extend({
	namespace: 'weebly-emberjs'
});
