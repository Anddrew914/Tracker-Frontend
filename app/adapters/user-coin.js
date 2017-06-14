import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  createRecord(store, type, record) {
    let api = this.get('host');
    let serialized = this.serialize(record, {includeId: true});

    let coin_Id = serialized.coin_id;
    let url = `${api}/user_coins/`;
    let data = {user_coin: serialized};

    return this.ajax(url, 'POST', {data})
    .then(() => console.log())
  }
});
