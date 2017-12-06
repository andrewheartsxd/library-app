import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return Ember.RSVP.hash({
      books: this.store.findAll('book'),
      authors: this.store.findAll('author'),
      libraries: this.store.findAll('library')
    });
  },

  actions: {

    editBook(book, columnName) {
      book.set('isEditing' + columnName, true);
    },

    cancelBookEdit(book, columnName) {
      book.set('isEditing' + columnName, false);
      book.rollbackAttributes();
    },

    saveBook(book, columnName) {
      if (book.get('isNotValid')) {
        return;
      }
      book.set('isEditing' + columnName, false);
      book.save();
    },

    saveAuthor(book, selectedAuthorID) {
      // Firebase adapter is buggy, we have to manually remove the previous relation
      book.get('author').then((previousAuthor) => {
        previousAuthor.get('books').then((previousAuthorBooks) => {
          previousAuthorBooks.removeObject(book);
          previousAuthor.save();
        });
      })

      let authors = this.controller.get('model.authors');
      let newAuthor = authors.find(record => record.id === selectedAuthorID)

      book.set('author', newAuthor);
      book.save().then(() => newAuthor.save());

      let columnName = 'Author';
      book.set('isEditing' + columnName, false);
    },

    saveLibrary(book, selectedLibraryID) {
      // Firebase adapter is buggy, we have to manually remove the previous relation
      book.get('library').then((previousLibrary) => {
        previousLibrary.get('books').then((previousLibraryBooks) => {
          previousLibraryBooks.removeObject(book);
          previousLibrary.save();
        });
      })

      let libraries = this.controller.get('model.libraries');
      let newLibrary = libraries.find(record => record.id === selectedLibraryID)

      book.set('library', newLibrary);
      book.save().then(() => newLibrary.save());

      let columnName = 'Library';
      book.set('isEditing' + columnName, false);
    }

  }

});
