import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  isAuthenticated: Ember.computed.alias('controllers.application.isAuthenticated'),

  actions: {
    signup: function () {
      var signUpForms = {
        firstName: this.get('firstName'),
        lastName: this.get('lastName'),
        email: this.get('email'),
        password: this.get('password'),
        passwordConfirmation: this.get('passwordConfirmation')
      };

      this.set('errorMessage', null);
      return Ember.$.post('signup', signUpForms).then(function(res){
        if (res.meta.auth_token) {
          localStorage.setItem('authToken', res.meta.auth_token);
          localStorage.setItem('userId', res.meta.user_id);
          this.set('isAuthenticated', true);
          this.transitionToRoute('rants');
        }
      }.bind(this));
    }
  }
});
