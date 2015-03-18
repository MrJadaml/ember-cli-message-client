import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['search'],

  actions: {
    doSearch: function () {
      var query = this.get('query');
      this.get('controllers.search').send('anything', query);
    },
  }
});