import Ember from 'ember';

export default Ember.ArrayController.extend({
  editTemp: false,

  actions: {
    editRant: function(rant) {
      rant.set('editTemp', true);
    },

    deleteRant: function () {

    }
  },

});
