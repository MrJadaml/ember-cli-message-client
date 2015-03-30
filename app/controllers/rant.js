import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['application'],
  editTemp: true,
  belongsToCurrentUser: function () {
    // var currentUser = NEED CURRENT USER IN LOCALSTORE;
    //            user = this.model._data.user;

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
