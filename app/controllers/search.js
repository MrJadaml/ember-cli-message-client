import Ember from 'ember';

export default Ember.Controller.extend({
  searchResults: null,

  actions: {
    anything: function(query){
      var getRants = this.store.find('rant', {query: query});

      getRants.then(function(res) {
        this.set('searchResults', res);
      }.bind(this));
    }
  }
});


// needs
// then
// send
