<script>
  /** @type {import('./$types').PageData} */
  export let data;

  function getValues(obj) {
    const result = [];

    function extractValues(obj, prefix = '') {
      for (const [key, value] of Object.entries(obj)) {
        const fullKey = prefix ? `${prefix}.${key}` : key;

        if (typeof value === 'object' && value !== null) {
          extractValues(value, fullKey);
        } else {
          result.push({ key: fullKey, value });
        }
      }
    }

    extractValues(obj);

    return result;
  }

</script>


<main>
  <h2>{"Showing results for: " + data.params.category}</h2>
  <hr />
  <!-- TODO: Style the results -->
  <div class="container">
    {#each data.response as item}
      <article style="background-color: #0D1321;">
        {#if data.params.category === "credit_cards"}
          <div id="creditcard">
            {#each getValues(item) as { key, value }}
              <div class="info">
                <b id='text'>{key + ":"}</b>
                <p>{value}</p>
              </div>
            {/each}
            <div id="chip"></div>
          </div>
        {:else}
          <div>
            {#each getValues(item) as { key, value }}
              <div class="info">
                <b id='text'>{key + ":"}</b>
                <p>{value}</p>
              </div>
            {/each}
          </div>
        {/if}
      </article>
    {/each}
  </div>
</main>

 
<style>
  h2{
    position: relative;
    top:160px;
    left:40px;
  }
  .container{
    margin-top: 100px;
  }
  .info{
    margin-top: 10px;
    margin-left:20px; 
  }
  #chip{
    width:200px;
    height: 130px;
    background-image: url(/creditcardchip.png);
    background-size: contain;
    position: relative;
    top:-150px;
    left:400px;
  }
  #creditcard{
    width: 650px;
    height: 375px;
    margin:auto;
    margin-top: 50px;
    margin-bottom: 20px;
    background-color: black;
    border-radius: 30px;
    border-width: 1px;
    border-color: white;
   
  }
  *{
    margin: 0px;
    color:white;
  }
  :global(body){
    background-color: rgb(145, 204, 255);
  }
</style>