import DS from 'ember-data';

export default DS.Model.extend({

  email: DS.attr('string'),

  isValid: Ember.computed.match('email', /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),

  isDisabled: Ember.computed.not('isValid')

});
