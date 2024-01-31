<script>
  import { enhance } from "$app/forms";
    import { story_id_store } from "$lib/stores";
  import "elizabot";
  import ElizaBot from "elizabot";
  import { onMount } from 'svelte'

  let eliza = new ElizaBot();
  let id;
  story_id_store.subscribe((value) =>{
    id = value;
  });
  let chat =[];
  
  onMount(()=>{
    if(id.length >2){
      console.log(id)
      let jsonObj = JSON.parse(id);
      chat = jsonObj;
    }
    else{
      chat = [{ user: "eliza", text: eliza.getInitial()}];
      
    }
  })
  function savechat(){
    let myJSON = JSON.stringify(chat);
    console.log(myJSON);
    story_id_store.set(myJSON)
  }
  async function write(message) {
    chat.push({user: "jakob", text: message});  
    chat = chat;

    var element = document.getElementById("visible");
    element.style.display = "flex"; 

    await new Promise((r) => setTimeout(r, 2000 + Math.random() * 2000));
    element.style.display = "none";
    var reply = eliza.transform(message)
    chat.push({user: "eliza", text: reply});
    chat = chat;
    
    savechat(message)
  }

</script>


<svelte:head>
  <link rel="stylesheet" href="/pico.min.css" />

  <style>
    nav {
      background-image: url("https://png.pngtree.com/thumb_back/fw800/background/20231015/pngtree-lush-green-lawns-captivating-textures-of-vibrant-grass-image_13680105.png") ; 
      background-size: contain;
      background-repeat: repeat-x;
    }
  </style>
</svelte:head>
<main>
  <div id="leftimgcontainer" class="repeatimgconatiner">
    <img src="https://i.pinimg.com/736x/ca/46/53/ca4653f31c3a42c333c6578200b97be2.jpg" alt="not found"  id="leftimg1" class="repeatimg">
    <img src="https://i.pinimg.com/736x/ca/46/53/ca4653f31c3a42c333c6578200b97be2.jpg" alt="not found" id="leftimg2" class="repeatimg flippedimg">
    <img src="https://i.pinimg.com/736x/ca/46/53/ca4653f31c3a42c333c6578200b97be2.jpg" alt="not found"  id="leftimg1" class="repeatimg">
  </div>
  
<div class="container">
  <h1>Frudiger Relaxing Zone</h1>
  {#each chat as message, i}
  <div class="scrollable">
      <article class:elizamessage={message.user=="eliza"} class:usermessage={message.user=="jakob"}>
        <span class ="messagetext">
          {message.text}
        </span>
      </article>
  </div>
  {/each}
  <article id = "visible">
    <span class ="circle"></span>
  <span class ="circle"></span>
  <span  class ="circle"></span>
  </article>
  <form
    method="post"
    use:enhance={({ form, data, action, cancel }) => {
      /* https://kit.svelte.dev/docs/form-actions#progressive-enhancement */
      cancel(); //don't post anything to server
      const text = data.get("text");
      write(text);

      form.reset();
    }}
  >
    <input type="text" name="text" class ="myanim"/>
  </form>
</div>
<div id="rightimgcontainer" class="repeatimgconatiner">
<img src="https://i.pinimg.com/736x/ca/46/53/ca4653f31c3a42c333c6578200b97be2.jpg" alt="not found"  id="rightimg1" class="repeatimg repeatimg">
  <img src="https://i.pinimg.com/736x/ca/46/53/ca4653f31c3a42c333c6578200b97be2.jpg" alt="not found" id="rightimg2" class="repeatimg flippedimg">
  <img src="https://i.pinimg.com/736x/ca/46/53/ca4653f31c3a42c333c6578200b97be2.jpg" alt="not found"  id="leftimg1" class="repeatimg">

</div>

</main>
<style>
  h1{
    text-align: center;
  }

  .scrollable{
    overflow-y: scroll;
  }
  .repeatimg{
    width: 200px;
    height: 600px;
    object-fit: repeat-y;
  }
  .flippedimg {
    transform: scaleY(-1);
  }
  @keyframes input{
    0% { background-color: rgba(70, 172, 255, 0.441);}
    25% {background-color: rgba(209, 220, 255, 0.354);}
    50% { background-color: rgba(78, 193, 255, 0.377);}
    100% {background-color: rgba(70, 172, 255, 0.441);}
  }
  @keyframes trafficlight{
    0%{background-color: red;}
    50%{background-color: yellow;}
    100%{background-color: lime}


  }
  @keyframes text{
    0%{color: red;}
    25%{color: yellow;}
    50%{color: lime;}
    75%{color: greenyellow;}
    100%{color: red;}
  }
  @keyframes typing{
    0%{transform: scale(1);}
    50%{transform: scale(1.4);}
    100%{transform: scale(1);}
}
.repeatimg{
  width: 200px;
  height: 250px;
  object-fit: cover;
}
  .repeatimgconatiner img {
    display: block;
    margin-bottom: 0px;
    width: 100%;

  }
  #leftimgcontainer {
    background-image: url("https://i.pinimg.com/736x/ca/46/53/ca4653f31c3a42c333c6578200b97be2.jpg");
    background-repeat: repeat;
    background-size: contain;
  }

  #rightimgcontainer {
    background-image: url("https://i.pinimg.com/736x/ca/46/53/ca4653f31c3a42c333c6578200b97be2.jpg");
    background-repeat: repeat;
    background-size: contain;
  }
.messagetext{
  font-weight: 900;
  color: rgb(5, 5, 122);
}
.myanim {
animation-name: input;
animation-duration: 10s; 
animation-timing-function: ease-in-out; 
animation-iteration-count: infinite;
max-width: 1000px;
position: static;
}
#visible{
  width: 100px;
  height: 60px;
  border-radius: 20px;
  padding: none;
  display: none;
  justify-content: center;
  align-items: center;
}
.circle{
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: rgb(0, 0, 0);
  animation-duration: 1000ms;
  animation-name: typing;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;

}
.circle:nth-child(1) {
animation-delay: 0ms;
animation-name: trafficlight;
animation-duration: 1000ms;
animation-timing-function: ease-in-out;
animation-iteration-count: infinite;

}
.circle:nth-child(2) {
animation-delay: 333ms;
animation-name: trafficlight;
animation-duration: 1000ms;
animation-timing-function: ease-in-out;
animation-iteration-count: infinite;

}
.circle:nth-child(3) {
animation-delay: 666ms;
animation-name: trafficlight;
animation-duration: 1000ms;
animation-timing-function: ease-in-out;
animation-iteration-count: infinite;

}
.elizamessage{
  max-height: 10px;
  max-width: 50%;
  background-color: rgba(0, 229, 255, 0.404);
  text-align: left;
  justify-content: center;
  display:flex;
  align-self: flex-start;
}

.usermessage{
  max-height: 10px;
  max-width: 50%;
  background-color: rgba(17, 0, 255, 0.416);
  text-align: right;
  margin-left: 50%;
  justify-content: center;
  display:flex;
  align-self: flex-end;

}
.container{
  background-image:url("https://images.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg");
  background-size: contain;
  background-repeat: repeat-y;
}

main{
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  background-size:cover;
  width: 100vw;
  height: 100vh;
  

}

:global(body){
  background-size:cover;
  
  background-image: url("https://preview.redd.it/anyone-know-if-the-nature-part-of-frutiger-aero-has-a-v0-f4w2iefb5cha1.jpg?auto=webp&s=d647685e5c6ad50302727ad9eed5005bb1d3d0fc");
}

</style>