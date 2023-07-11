<script>
  import { availableLanguages } from '../config/data'
  import { _, locale } from 'svelte-i18n'
  import { providerNameFilter, selectedLanguage } from "../stores";

  var currentLanguage;
  selectedLanguage.subscribe(data=>currentLanguage = data);

  function changeLanguage(event) {
    let language = event.target.value;
    localStorage.setItem('selectedLanguage', language);
    selectedLanguage.set(language);
    locale.set(language)
  }

  function setProviderFilterName(event) {
    providerNameFilter.set(event.target.value);
  }
</script>

  <nav>
    <img src="images/logo.png" alt="upay logo"/>
    <div class="search-content">
    <i class="fa-solid fa-magnifying-glass"></i>
    <input type='text' class="custom-search-input" on:input={setProviderFilterName} placeholder={$_('enterProviderName')}>
  </div>
  <div>
    <select class="custom-select" value={currentLanguage || availableLanguages[0]} on:change={changeLanguage}>
      {#each availableLanguages as language}
        <option value={language}>{language}</option>
      {/each}
    </select>
  </div>
</nav>


<style>
  nav {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: white;
    z-index: 2;
    align-items: center;
    height: 65px;
    padding: 0 15px;
    justify-content: space-between;
  }

  .search-content{
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 10px 15px 10px 10px;
    border-radius: 25px;
    background-color: #f3f3f5;
  }

  i {
    color: rgb(12, 28, 73);
    font-size: large;
    margin-right: 12px;
  }

  .custom-search-input {
    width: 300px;
    background-color: transparent;
    border: none;
    outline: none;
    color: #000;
    font-size: 16px;
    text-align: center;
  }

  .custom-search-input::placeholder {
    text-align: center;
    color: gray;
  }

  .custom-search-input:focus {
    background-color: transparent; /* Remove the background color on focus */
  }

  .custom-select {
    width: 60px;
    height: 35px;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    color: #333;
  }
</style>