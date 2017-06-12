import StorageObject from 'ember-local-storage/local/object';

const Storage = StorageObject.extend();
  Storage.reopenClass({
    initialState() {
      return {
        dummy: {a: 1, b: 2, c: 3},
      };
    }
  });

export default Storage;
