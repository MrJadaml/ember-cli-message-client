import Ember from 'ember';

export default Ember.ArrayController.extend({
  rantBody: '',

  charCount: function () {
    return this.get('rantBody').length;
  }.property('rantBody'),

  actions: {
    saveRant: function () {
      var body = this.get('rantBody');
      if (body) {
        var title = this.get('rantTitle'),
            user = this.get();
        var rant = this.store.createRecord('rant', {
          title: title,
          body: body,
          user: user
        });
        rant.save().then(function() {
          this.transitionToRoute('rants');
        }.bind(this));
      } else {
        this.set('title', '');
        this.set('body', '');
      }
    },

    cancelRant: function () {

    }
  }
});
