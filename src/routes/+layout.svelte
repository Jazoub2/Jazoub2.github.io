<script>

import "../app.pcss";
let links = ["/memory","/telltale","/photoapp","/register","/login","/princeregister","/pricelogin","/todo","/chat",
"/scroll","/blog","/search","/clikcerlogin","/romaninput","candycrushah","/sellingpoint","/sellingshop"]

</script>


<nav class="bg-gray-800">
  {#each links as link}  
    <a class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md
    px-3 py-2 text-sm font-medium" href="{link}">{link.length<2?"Hem":link.charAt(1).toUpperCase() + link.slice(2)}
    </a> 
{/each}

 <!--- <a href="/memory">Memory</a>
  <a href="/telltale">Telltale</a>
  <a href="/photoapp">Photo App</a>
  <a id="princess" href="/register">PrincessRegister</a>
  <a id="princess" href="/login">PrincessLogin</a>
  <a id="prince" href="/princeregister">PrinceRegister</a>
  <a id="prince" href="/pricelogin">PrinceLogin</a>
  <a id="todo" href="/todo">todo</a>
  <a id="chat" href="/chat">chat</a>
  <a id="scroll" href="/scroll">Scroll</a>
  <a id="blog" href="/blog">Blog</a>
  <a id="search" href="/search">Search</a>
  --->
  <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">press here</a>
  
</nav>

<hr>

<slot></slot>

<style>
</style>