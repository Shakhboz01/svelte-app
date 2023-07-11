import { addMessages, getLocaleFromNavigator, init } from 'svelte-i18n';
import en from './en.json';
import uz from './uz.json';
import ru from './ru.json';
import { selectedLanguage } from '../stores';

var currentLanguage = localStorage.getItem('selectedLanguage') || getLocaleFromNavigator();
addMessages('ru', ru);
addMessages('uz', uz);
addMessages('en', en);

selectedLanguage.set(currentLanguage);

init({
  fallbackLocale: 'en',
  initialLocale:  currentLanguage,
});
