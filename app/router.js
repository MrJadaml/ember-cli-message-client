import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('styleguide');
  this.resource('rants', { path: '/' });
  this.route('search');
  this.route('users');
  this.route('new');
});

export default Router;
