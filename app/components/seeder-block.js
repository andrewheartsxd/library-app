import Component from '@ember/component';
import Ember from 'ember';

const MAX_VALUE = 100;

export default Component.extend({

  counter: null,

  isCounterValid: Ember.computed.lte('counter', MAX_VALUE),
  isCounterNotValid: Ember.computed.not('isCounterValid'),
  placeholder: `Max ${MAX_VALUE}`,

  generateReady: false,
  deleteReady: false,

  generateInProgress: false,
  deleteInProgress: false,

  generateIsDisabled: Ember.computed.or('isCounterNotValid', 'generateInProgress', 'deleteInProgress'),
  deleteIsDisabled: Ember.computed.or('generateInProgress', 'deleteInProgress'),

  actions: {

    generateAction() {
      if (this.get('isCounterValid')) {
        this.sendAction('generateAction', this.get('counter'));
      }
      this.set('counter', null);
    },

    deleteAction() {
      this.sendAction('deleteAction');

    }
  }

});
