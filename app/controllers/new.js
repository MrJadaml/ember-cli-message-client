import Ember from 'ember';

export default Ember.ObjectController.extend({
  rantTitle: '',
  rantBody: '',

  charCount: function () {
    return this.get('rantBody').length;
  }.property('rantBody'),

  actions: {
    saveRant: function () {
      var body = this.get('rantBody'),
         title = this.get('rantTitle'),
        userId = localStorage.userId;

      this.store.find('user', userId).then(function (user) {
        if (body) {
          var rant = this.store.createRecord('rant', {
             title: title,
             body: body,
             user: user,
           });
          rant.save().then(function() {
            this.transitionToRoute('rants');
          }.bind(this));
        } else {
          this.set('title', '');
          this.set('body', '');
        }
      }.bind(this));
    },

    cancelRant: function () {

    }
  }
});
