import DS from 'ember-data';

var Rant = DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  user: DS.belongsTo('user'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
});

Rant.reopenClass({
  FIXTURES: [
      ]
});

export default Rant;
