import Ember from 'ember';

export default Ember.Controller.extend({
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
        console.log(res);
      })
    }
  }
});
