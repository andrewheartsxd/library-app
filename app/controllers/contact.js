import Controller from '@ember/controller';

export default Controller.extend({

  emailAddress: '',

  message: '',

  emailIsValid: Ember.computed.match('emailAddress', /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),

  messageIsValid: Ember.computed.gte('message.length', 5),

  isValid: Ember.computed.and('emailIsValid', 'messageIsValid'),

  actions: {

    submitMessage() {
      this.set('responseMessage', `Thank you! We've received your message from: ${this.get('emailAddress')}`);
      this.set('emailAddress', '');
      this.set('message', '');
    }

  }
});
