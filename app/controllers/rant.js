import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['application', 'new'],
  editTemp: false,
  belongsToCurrentUser: function () {
    return parseFloat(localStorage.userId) === this.model._data.user;
  }.property('model.@each'),

  charCount: function () {
    return this.get('rantBody').length;
  }.property('rantBody'),

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
