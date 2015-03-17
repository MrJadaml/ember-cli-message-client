import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    search: function () {
      var searchedText = this.get('query');
      this.transitionToRoute('search', { query: searchedText });
    },
  }
});
