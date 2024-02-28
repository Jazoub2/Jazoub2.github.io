<svelte:head><link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
</svelte:head>
<script>
    
let cart = [];
let selected = 2;
//{carName:"",price:,imgSrc:""}
let cars =[{info:{carName:"Verdant Voyager X3000",price:"100£"}, imgSrc:"sellingshopimg/oldcar.jpg"}
,{info:{carName:"Flycar",price:"200£"},imgSrc:"sellingshopimg/flycar.jpg"}
,{info:{carName:"Familycar",price:"300£"},imgSrc:"sellingshopimg/familycar.jpg"}
,{info:{carName:"Robotcar",price:"400£"},imgSrc:"sellingshopimg/robotcar.jpg"}
,{info:{carName:"Goofycar",price:"999£"},imgSrc:"sellingshopimg/goofycar.jpg"}
,{info:{carName:"Playingcar",price:"250£"},imgSrc:"sellingshopimg/playingcar.jpg"}
,{info:{carName:"Fastcar",price:"1000£"},imgSrc:"sellingshopimg/fastcar.jpg"}
,{info:{carName:"Boxcar",price:"20000£"},imgSrc:"sellingshopimg/boxcar.jpg"}]

//let removeselected = cars.shift()
function nextCars(){
   // cars.unshift(removeselected)
    cars.push(cars.shift())
    cars = [...cars];   
}
function previousCars(){
    cars.unshift(cars.pop())
    cars = [...cars];
}
function addToCart(){
cart = [...cart, cars[selected].info];;
console.log(cart);

}
</script>
<main>
    <div id="cart">
        <p id="textcart">{cart[selected]}</p>
    </div>

<div class=" Grid grid gap-4">
    <div class="container ">
        <!---BIG CAR IMAGE-->
        <!---DIV bakcground image, text under-->
        <img class="h-auto max-w-full rounded-lg selected" src={cars[selected].imgSrc} alt="gg">
        <div style="display: flex; justify-content:space-between; gap: 50px; position:relative; bottom:30px; margin-left:10px; margin-right:10px;  ">
            <p id="selectedName" style="display: inline;">{cars[selected].info.carName}</p>
            <p id="selectedPrice" style="display: inline;">{cars[selected].info.price}</p>
        </div>
    <button id="cartbutton" on:click={(()=>{addToCart()})}><i class='bx bx-cart-add' style="font-size:40px"></i></button>    
    </div>
<!--SMALL CAR IMAGE-->
    <div class="grid grid-cols-5 gap-4">
        {#each cars as car,i}
        {#if i<5}
        <div>
            <img class="h-auto max-w-full rounded-lg smallimg" src={car.imgSrc} alt="" style="{i === 2 ? 'filter: brightness(100%);' : 'filter: brightness(50%);'}">
            <p class="scrollInfo">{car.info.price}  {car.info.carName}</p>
        </div>
        {/if}
        {/each}
        
    </div>
</div>
<button class="scroll" id ="rightscrollbutton" on:click={nextCars}>RightArrow</button>
<button class="scroll" id ="leftscrollbutton" on:click={previousCars}>LeftArrow</button>

</main>

<style>
    .smallimg{
        max-width: 200px;
        max-height: 100px;
        min-width: 100px;


    }
    #cart{
        width: 100px;
        height: 100px;
    }
    #textcart{
        background-color: blue;
        max-width: 150px;
        overflow-wrap: normal;
    }
*{
    font-weight: 500;
    color: darkmagenta;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.container{
    display: flex;
    flex-direction: column;
    background: radial-gradient(black, rgb(15, 0, 5));
    margin-top: 35px;
    height: 300px;
    width: 800px;
    margin:auto;
    border: 5px solid rgb(75, 0, 0);
}
.selected{
width:100%;
height:100%;
    margin: auto;
}

.Grid{
        margin: auto;
        height: 100vh;
        width: 70vw;
    }
.scroll{
    position: absolute;
    top: 90%;
}
#rightscrollbutton{
    right: 70px;
}
#leftscrollbutton{
    left: 70px;
}
.scrollInfo{
    font-size: 9px;
}
#cartbutton{
    width: 70px;
    height: 50px;
    position: relative;
    background-image:url("sellingshopimg/cart.png");
    background-size: contain; 
}

:global(body){
    background: radial-gradient(#320023, #000000)
}
</style>