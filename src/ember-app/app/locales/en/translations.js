import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import NewPlatformNewTest3AuthorLForm from './forms/new-platform-new-test3-author-l';
import NewPlatformNewTest3BookLForm from './forms/new-platform-new-test3-book-l';
import NewPlatformNewTest3CountryLForm from './forms/new-platform-new-test3-country-l';
import NewPlatformNewTest3LanguageLForm from './forms/new-platform-new-test3-language-l';
import NewPlatformNewTest3AuthorEForm from './forms/new-platform-new-test3-author-e';
import NewPlatformNewTest3BookEForm from './forms/new-platform-new-test3-book-e';
import NewPlatformNewTest3CountryEForm from './forms/new-platform-new-test3-country-e';
import NewPlatformNewTest3LanguageEForm from './forms/new-platform-new-test3-language-e';
import NewPlatformNewTest3AuthorModel from './models/new-platform-new-test3-author';
import NewPlatformNewTest3BookModel from './models/new-platform-new-test3-book';
import NewPlatformNewTest3CountryModel from './models/new-platform-new-test3-country';
import NewPlatformNewTest3LanguageModel from './models/new-platform-new-test3-language';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'new-platform-new-test3-author': NewPlatformNewTest3AuthorModel,
    'new-platform-new-test3-book': NewPlatformNewTest3BookModel,
    'new-platform-new-test3-country': NewPlatformNewTest3CountryModel,
    'new-platform-new-test3-language': NewPlatformNewTest3LanguageModel
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        books: {
          caption: 'books',
          title: 'books',
          'new-platform-new-test3-country-l': {
            caption: 'new-platform-new-test3-country-l',
            title: 'new-platform-new-test3-country-l'
          },
          'new-platform-new-test3-book-l': {
            caption: 'new-platform-new-test3-book-l',
            title: 'new-platform-new-test3-book-l'
          },
          'new-platform-new-test3-author-l': {
            caption: 'new-platform-new-test3-author-l',
            title: 'new-platform-new-test3-author-l'
          },
          'new-platform-new-test3-language-l': {
            caption: 'new-platform-new-test3-language-l',
            title: 'new-platform-new-test3-language-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'new-platform-new-test3-author-l': NewPlatformNewTest3AuthorLForm,
    'new-platform-new-test3-book-l': NewPlatformNewTest3BookLForm,
    'new-platform-new-test3-country-l': NewPlatformNewTest3CountryLForm,
    'new-platform-new-test3-language-l': NewPlatformNewTest3LanguageLForm,
    'new-platform-new-test3-author-e': NewPlatformNewTest3AuthorEForm,
    'new-platform-new-test3-book-e': NewPlatformNewTest3BookEForm,
    'new-platform-new-test3-country-e': NewPlatformNewTest3CountryEForm,
    'new-platform-new-test3-language-e': NewPlatformNewTest3LanguageEForm
  },

});

export default translations;
