import Ember from 'ember';

export default Ember.ArrayController.extend({
  editTemp: false,

  actions: {
    editRant: function(rant) {
      rant.set('editTemp', true);
      this.set('rantTitle', rant.get('title'));
      this.set('rantBody', rant.get('body'));
    },

    saveRant: function (rant) {
      var title = this.get('rantTitle');
      var body = this.get('rantBody');
      if (body) {
        rant.set('title', title);
        rant.set('body', body);
      }
      rant.save().then(function() {
        this.set('rantTitle', '');
        this.set('rantBody', '');
        rant.set('editTemp', false);
      }.bind(this));
    },

    cancelRant: function (rant) {
      rant.set('editTemp', false);
    },

    deleteRant: function () {

    }
  },

});
