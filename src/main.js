import App from './App.svelte';
import './i18n/i18n'
import './config/firebase.config'

const app = new App({
	target: document.body
});

export default app;