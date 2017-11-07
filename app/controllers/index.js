import Controller from '@ember/controller';

export default Controller.extend({

  headerMessage: 'Coming Soon',

  responseMessage: '',

  emailAddress: '',

  isValid: Ember.computed.match('emailAddress', /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),

  isDisabled: Ember.computed.not('isValid'),

  actions: {

    saveInvitation() {
      const email = this.get('emailAddress');
      
      const newInvitation = this.store.createRecord('invitation', {email: email});

      newInvitation.save().then((response) => {
        this.set('responseMessage', `Thank you! We've just saved your email address with the following id: ${response.get('id')}`);
        this.set('emailAddress', '');
      });
    }

  }

});
