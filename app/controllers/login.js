import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {

    login: function () {
      var credentials = {
        email: this.get('email'),
        password: this.get('password')
      };

      this.set('errorMessage', null);
      return Ember.$.post('login', credentials).then(function(response){
        this.set('errorMessage', response.error);
        if (response.auth_token) {
          localStorage.setItem('authToken', response.auth_token);
          alert("Login succeeded");
          this.transitionToRoute('rants');
        }
      }.bind(this));
    }
  }
});
