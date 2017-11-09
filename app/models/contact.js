import DS from 'ember-data';

export default DS.Model.extend({

  email: DS.attr('string'),

  message: DS.attr('string'),

  emailIsValid: Ember.computed.match('email', /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),

  messageIsValid: Ember.computed.gte('message.length', 5),

  isValid: Ember.computed.and('emailIsValid', 'messageIsValid')
  
});
