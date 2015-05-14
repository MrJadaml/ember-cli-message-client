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

    login: function () {
      var credentials = {
        email: this.get('email'),
        password: this.get('password')
      };

      this.set('errorMessage', null);
      return Ember.$.post('https://whispering-waters-1632.herokuapp.com/login', credentials).then(function(response){
        this.set('errorMessage', response.error);
        if (response.auth_token) {
          localStorage.setItem('authToken', response.auth_token);
          localStorage.setItem('userId', response.user_id);
          this.set('isAuthenticated', true);
          location.reload();
        }
      }.bind(this));
    },

    logout: function () {
      localStorage.clear();
      this.set('isAuthenticated', false);
      // insert logout into header
      location.reload();
    }
  }
});
