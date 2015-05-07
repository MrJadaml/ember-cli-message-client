import DS from 'ember-data';

var User = DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'),
  rants: DS.hasMany('rant'),
});

export default User;
