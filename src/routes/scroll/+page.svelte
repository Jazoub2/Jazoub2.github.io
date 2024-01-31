<script>
    import { fade, fly } from 'svelte/transition';
   
    // Define parallax layers
    const layers = [0, 1];
  
    // Define messages for scrollytelling
    const messages = [
      "Beware intrepid traveler",
      "Watch thyself",
      "Thou shalt not be here",
      "Leave whenneth thou still haveth thyne soul",
      "Halt! He's coming. Save thyneself!"
    ];
    const images = [
      "",
      "/eyeball.png",
      "https://images.squarespace-cdn.com/content/v1/6051793d0c5c911997546d5f/c7c83784-a1ec-4ae9-9165-b4a98ffa9fd0/Scary+monster+pictures+5.png",
     "https://pics.craiyon.com/2023-07-25/3e5039258c714506b9e200a9c569b611.webp"

    ]
  
    // Initialize scroll position, message index, and fader
    let y = 0;
    let currentMessageIndex = 0;
    let fader = true;
    $: currentMessage = messages[currentMessageIndex];
    $: currentImg = images[currentMessageIndex];

    // Calculate the step size for message changes
    const step = Math.floor(1000 / messages.length);

    // Function to handle scroll events
    function handleScroll() {
      const tempIndex = currentMessageIndex;
  
      // Update the message index based on scroll position
      currentMessageIndex = Math.max(0,Math.floor(y / step));
  
      // Update the fader state based on message change
      fader = currentMessageIndex === tempIndex;
      //currentImg = images[currentMessageIndex];
    }
  </script>
  
  <svelte:window bind:scrollY={y} on:scroll={handleScroll} />
  
  <main>
    <!-- Parallax container for layers -->
    <div class="container">
      {#each layers as layer}
        <img class = "background"
          style="transform: translate(0, {y < 2 ? y * layer : -y * layer / (layers.length - 3)}px)"
          src={`/backgroundwebb${layer}.png`}
          alt={`parallax layer ${layer}`}
        >
      {/each}
    </div>
  
    <!-- Scrollytelling text section -->
    <div class="text">
        {#if fader && currentMessageIndex > 0}
          <!-- Animate text with fly-in and fade-out transitions -->
            <div class="story" in:fly={{ y: 400, duration: 2000 }} out:fade>
                <p> {Math.round(y)} meters below the mortal world</p>
                <p>{currentMessage}</p>
                <div class="bild" style="background-image:url({currentImg});" ></div>
            </div>
          {:else if currentMessageIndex === 0 }
          <p>{Math.round(y)} meters below the mortal world</p>
          <p>{currentMessage}</p>
        {/if}
    </div>
  </main>
  
  <style>
    .bild{
      width: 200px;
      height: 200px;
      margin: auto;
      background-size: cover;
      border-radius: 50%;
    }
    :global(body) {
      margin: 0;
      padding: 0;
      background-color: #000000;
    }
  
    main {
      height: 1500px;
    }
 
    .story img{
        width: 300px;
        bottom:0;
    }
  
    .container {
      position: relative;
      height: 100%;
      width: 100%;
      overflow: hidden;
    }
  
  
    .container img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100%;
    }
  
    .text {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      z-index: 1;
      width: 100%;
      color: white;

    }
  .background{
    height: 100%;
  }

  </style>
  