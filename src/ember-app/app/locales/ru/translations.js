import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'Books',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Books',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Books',
          title: 'Books'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        books: {
          caption: 'Books',
          title: 'Books',
          'new-platform-new-test3-country-l': {
            caption: 'Country',
            title: ''
          },
          'new-platform-new-test3-book-l': {
            caption: 'Book',
            title: ''
          },
          'new-platform-new-test3-author-l': {
            caption: 'Author',
            title: ''
          },
          'new-platform-new-test3-language-l': {
            caption: 'Language',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
