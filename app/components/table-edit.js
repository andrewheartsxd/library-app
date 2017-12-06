import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({

  model: null,

  columnName: '',

  key: null,

  isEditing: Ember.computed('columnName', function () {
    return 'isEditing' + this.get('columnName');
  })

});
