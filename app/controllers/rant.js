import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['application', 'new'],
  editTemp: false,
  belongsToCurrentUser: function () {
    return parseFloat(localStorage.userId) === this.model._data.user;
  }.property('model.@each'),

  charCount: function () {
    return this.get('body').length;
  }.property('body'),

  actions: {
    editRant: function() {
      this.set('editTemp', true);
    },

    saveRant: function () {
      var self = this;
      self.get('model').save().then(function () {
        self.set('editTemp', false);
      });
    },

    cancelRant: function () {
      this.set('editTemp', false);
    },

    deleteRant: function (rant) {
      rant.deleteRecord();
    }
  },
});
