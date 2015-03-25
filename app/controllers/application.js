import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['search'],
  isAuthenticated: false,
  
  init: function() {
    var authToken = localStorage.getItem('authToken');
    if(authToken) {
      this.isAuthenticated = true;
    }
    // http.post('/authenticate').then() unless isAuthenticated
  },

  actions: {
    doSearch: function () {
      var query = this.get('query');
      this.get('controllers.search').send('anything', query);
    },
  }
});
