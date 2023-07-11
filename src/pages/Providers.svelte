<script>
  import { providerData } from "../config/data";
  import { providerNameFilter } from "../stores";
  import { onMount, afterUpdate } from "svelte";

  let currentTypedProviderName;
  providerNameFilter.subscribe(text => {
    currentTypedProviderName = text.toLowerCase();
  });

  let filteredProviders = [];

  function filterProviders() {
    filteredProviders = Object.entries(providerData).map(([category, providers]) => {
      const filteredProviders = providers.filter(provider =>
        provider.provider_name.toLowerCase().includes(currentTypedProviderName)
      );
      return [category, filteredProviders];
    });
  }

  onMount(filterProviders)
  afterUpdate(filterProviders);
  $: if (currentTypedProviderName) {
    filterProviders()
  }
</script>

<div class="page-container">
  {#each filteredProviders as [category, providers]}
    {#if providers.length > 0}
      <div class="category-container">
        <span class="provider-name">{category}</span>
        <ul>
          {#each providers as provider_data}
            <li>
              <img src="images/beeline.jpg" alt="provider name">
              <span>{provider_data.provider_name}</span>
            </li>
          {/each}
        </ul>
      </div>
    {/if}
  {/each}
</div>


<style>
  .page-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-bottom: 25px;
  }

  .category-container{
    margin: 30px 15px 0 15px;
    display: flex;
    flex-direction: column;
  }

  ul {
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
  }
  li{
    cursor: pointer;
    list-style-type: none;
    width: 98px;
    height: 100px;
    margin: 5px 22px 5px 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  li:hover {
    scale: 1.07;
    transition: 0.2s ease;
  }
  li > img {
    width: 80%;
    height: 40%;
    margin: auto;
    object-fit: contain;
  }

  li > span {
    font-size: 11px;
    padding: 3px;
    color: gray;
    text-align: center;
  }

  .provider-name {
    padding-bottom: 5px;
  }
</style>