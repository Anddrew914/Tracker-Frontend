import Ember from 'ember';
import config from './config/environment';

//routes on this page file runs .js files in the routes folder
const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
    this.route('sign-up');
    this.route('sign-in');
    this.route('change-password');
    this.route('users');
    this.route('posts');
    this.route('post.new', { path: 'posts/new' });
    this.route('post', { path: 'posts/:post_id' }, function() {
      this.route('comment.new', { path: 'comments/new' });

  });
});

export default Router;
