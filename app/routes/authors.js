import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.findAll('author');
  },

  actions: {

    editAuthor(author, columnName) {
      author.set('isEditing' + columnName, true);
    },

    cancelAuthorEdit(author, columnName) {
      author.set('isEditing' + columnName, false);
      author.rollbackAttributes();
    },

    saveAuthor(author, columnName) {
      if (author.get('isNotValid')) {
        return;
      }
      author.set('isEditing' + columnName, false);
      author.save();
    }

  }

});
