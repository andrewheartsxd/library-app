import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.createRecord('invitation');
  },

  actions: {

    saveInvitation(newInvitation) {
      newInvitation.save().then((newInvitation) => {
        this.controller.set('responseMessage', `Thank you! We've just saved your email address with the following id: ${newInvitation.get('id')}`);
        newInvitation.set('email', '');
      });
    },

    willTransition() {
      this.controller.get('model').rollbackAttributes();
      this.controller.set('responseMessage', '');
    }

  }

});
