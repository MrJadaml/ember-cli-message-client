import Ember from 'ember';

export default Ember.ObjectController.extend({
  editTemp: true,
  belongsToCurrentUser: function () {
    console.log(this);
    debugger;
  }.property('model.@each'),

  actions: {
    editRant: function() {
      this.set('editTemp', true);
      this.set('rantTitle', this.get('title'));
      this.set('rantBody', this.get('body'));
    },

    saveRant: function (rant) {
      rant.save().then(function () {
        this.set('editTemp', false);
      }.bind(this));
    },

    cancelRant: function () {
      this.set('editTemp', false);
    },

    deleteRant: function (rant) {
      rant.deleteRecord();
      rant.save();
    }
  },
});
