//Creating Application
window.Weeblys = Ember.Application.create();

//Allows for Local Storage
Weeblys.ApplicationAdapter = DS.LSAdapter.extend({
	namespace: 'weebly-emberjs'
});
