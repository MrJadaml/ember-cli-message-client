import Ember from 'ember';

export default Ember.Route.extend({

  // actions: {
  //   signUp: function () {
  //
  //   },
  //
  //   login: function () {
  //     var appController = this.get("controllers.application"),
  //         credentials = {
  //           email: this.get('email'),
  //           password: this.get('password')
  //         };
  //
  //     this.set('errorMessage', null);
  //     return Ember.$.post('login', credentials).then(function(response){
  //       this.set('errorMessage', response.error);
  //       if (response.auth_token) {
  //         localStorage.setItem('authToken', response.auth_token);
  //         alert("Login succeeded");
  //         appController.set('isAuthenticated', true);
  //         this.transitionToRoute('rants');
  //       }
  //     }.bind(this));
  //   },
  //
  //   logout: function () {
  //     localStorage.removeItem('authToken');
  //     // insert logout into header
  //     this.transitionToRoute('signup');
  //   }
  // }
});
