import Ember from 'ember';

export default Ember.Route.extend({
  model() {  //the same as writing model: function()
    return Ember.RSVP.hash({
      cities: this.store.findAll('city'),
      rentals: this.store.findAll('rental')
    });
  },
  announcements() {
    return this.store.findAll('announcement');
  },
  actions: {
    // save3(params) {
    //   var newRental = this.store.createRecord('rental', params);
    //   newRental.save();
    //   this.transitionTo('index');
    // },
    save6(params) {
      var newCity = this.store.createRecord('city', params);
      newCity.save();
      this.transitionTo('index');
    },
    deleteCity(city) {
      if (confirm('You sure you want to delete this city?')) {
        city.destroyRecord();
        this.transitionTo('index');
      }
    }

  }
});
