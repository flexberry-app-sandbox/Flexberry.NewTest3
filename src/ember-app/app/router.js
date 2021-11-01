import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('new-platform-new-test3-author-l');
  this.route('new-platform-new-test3-author-e',
  { path: 'new-platform-new-test3-author-e/:id' });
  this.route('new-platform-new-test3-author-e.new',
  { path: 'new-platform-new-test3-author-e/new' });
  this.route('new-platform-new-test3-book-l');
  this.route('new-platform-new-test3-book-e',
  { path: 'new-platform-new-test3-book-e/:id' });
  this.route('new-platform-new-test3-book-e.new',
  { path: 'new-platform-new-test3-book-e/new' });
  this.route('new-platform-new-test3-country-l');
  this.route('new-platform-new-test3-country-e',
  { path: 'new-platform-new-test3-country-e/:id' });
  this.route('new-platform-new-test3-country-e.new',
  { path: 'new-platform-new-test3-country-e/new' });
  this.route('new-platform-new-test3-language-l');
  this.route('new-platform-new-test3-language-e',
  { path: 'new-platform-new-test3-language-e/:id' });
  this.route('new-platform-new-test3-language-e.new',
  { path: 'new-platform-new-test3-language-e/new' });
});

export default Router;
