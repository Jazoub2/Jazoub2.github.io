<script>
    import { browser } from '$app/environment';

  let player_red= 0;
  let player_blue=0;
  let blue_turn = true;
  let cards = [];
  let pairs = 6;
  let nextTurn = !blue_turn
  let timeleft = 10;
var downloadTimer;
function myTimer(){
  downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    timeleft = 10;
    blue_turn = !blue_turn;

    myTimer()
  }
  if (browser)
    document.getElementById("progressBar").value = 10 - timeleft;
  timeleft -= 1;
}, 1000);
  }

  for (let index = 0; index < 12; index++) {
    cards.push({
      id: index, // TODO: unique ids per card card
      img: "https://picsum.photos/id/"+(15+index%pairs)+"/200/300",
      flipped: false,  // TODO: think
      completed: false,
    });
  }
  cards.sort(() => Math.random() - 0.5);
  let flipcount = 0;

  function flip(card) {
    if (flipcount ==0 && downloadTimer== undefined){
      myTimer()
    }
    // flip card over if two cards are not already flipped :)
    // TODO: and card is already not flipped :)
    if (!card.flipped && flipcount < 2) {
      card.flipped = true;
      flipcount += 1
      }
      // flip the cards over after 2s from seeing both cards
      if (flipcount == 2) {
        nextTurn = !blue_turn
        cards.forEach((firstcard) => {
            if(firstcard.flipped && firstcard.id != card.id && card.img == firstcard.img){
              firstcard.completed=true;
              card.completed=true;
              
              if(blue_turn){
                player_blue++;
                nextTurn = !nextTurn
              }
              else{
                player_red++;
                nextTurn = !nextTurn
              }
            }
          });
          cards = cards;




        setTimeout(() => {
          clearInterval(downloadTimer);
          timeleft = 10;
          blue_turn = nextTurn

          myTimer()
          // flip over cards that have not been marked as "completed"
          cards.forEach((card) => {
            card.flipped = card.completed;
          });
          flipcount = 0;
          cards = cards;
        }, 1000);
      }
      cards = cards;
    }
</script>

<progress value="0" max="10" id="progressBar"></progress>

<main>
  <div class="row">
    {#each cards as card, i}
      <div
        on:click={() => {
          flip(card);
        }}
        on:keypress={() => {
          flip(card);
        }}
        class:flipped={card.flipped}
        class="card"

        style ="    box-shadow: 0 0 5px 5px {card.completed? "green": "red"};
        "
      >
        <img class="front" src={card.img} alt="" />
        <img class="back" src="front.webp" alt="" />
      </div>
    {/each}
  </div>
  <div class = "box" id = "red-box">{player_red}</div>
  <div class = "box" id = "blue-box">{player_blue}</div>
  <div style={blue_turn?"right: 60px; transform:rotate(-45deg);":"left:60px;transform:rotate(45deg);"} class = "hat"></div>

</main>

<style>
  main {
    margin-top: 50px;
    display: flex;
    place-content: center;
    place-items: center;
  }
 
  .row {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(6, 100px);
    grid-template-rows: repeat(3, 100px);
  }

  @media (max-width:800px){
    .row{
      grid-template-columns: repeat(4, 100px);
    }
  }

  @media (max-width:600px){
    .row{
      grid-template-columns: repeat(2, 100px);
      grid-template-rows: repeat(6, 100px);

    }
  }

  .card {
    cursor: pointer;
    transition: transform 1s;
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
  }

  .card.flipped {
    transform: rotateY(180deg);
  }

  .card .back {
    transform: rotateY(0deg);
    
  }

  .card .front {
    transform: rotateY(180deg);
  }

  .card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    position: absolute;
  }
    .box{
    width: 100px;
    height: 100px;
    position: fixed;
    bottom: 0;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #red-box{
    background-color: red;
    box-shadow: 0 0 20px 20px burlywood;

    left: 0px;
    
    font-size: 30px;
    font-weight: 900;

  }
  #blue-box{
    background-color: blue;
    box-shadow: 0 0 20px 20px burlywood;

    right: 0px;
    text-align: center;
    font-size: 30px;
    font-weight: 900;
  }
  #red-box, #blue-box{
  bottom: 0px;
  z-index: 2;
}

.hat{
height: 0px;
width: 0px;
border-bottom: 100px solid red;
border-right: 50px solid transparent;
border-left: 50px solid transparent;
position: fixed;
bottom:60px;
z-index: 3;
}

.hat::before{
content:'';
width: 20px;
height: 20px;
position: fixed;
background-color: beige;
border-radius: 50%;
z-index: 4;
top:-10px;
left:calc(50% - 10px);
}

.hat::after{
  content: '';
  color:red;
  font-weight: 900; 
  text-align: center;
  width:100px;
  height: 20px;
  border-radius: 10px/20px;
  top: 90px;
  position: fixed;
  left: -50px;
  z-index: 4;
  background-color: beige;
}
/*.timer{
  background-color: blanchedalmond;
  box-shadow: 0 0 5px 5px burlywood;

  position: fixed;
  bottom: 10px;
  text-align: center;

  width: 250px;
  height: 50px;

  font-size: 50px;
  font-family:'Times New Roman', Times, serif;
  font-weight: 500;


}*/

:global(body){
  background-size: 1540px 800px;
  background-repeat: no-repeat;
    background-image:url("https://cdn.vox-cdn.com/thumbor/5FQG9HPtgSriPyBggPNI0Oj7hTw=/0x0:2121x1414/1200x900/filters:focal(892x538:1230x876)/cdn.vox-cdn.com/uploads/chorus_image/image/58043659/GettyImages_576728180.7.jpeg");
}
</style>
