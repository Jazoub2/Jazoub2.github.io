<script>
    import { each } from "svelte/internal";
	import { onMount } from "svelte"
    import { filter } from "@skeletonlabs/skeleton";

	let top = 100;
	let left = 100;
	
	let selected = []
	let colors =[{color:"red", id:"0"}
	,{color:"orange",id:"1"}
	,{color:"yellow",id:"2"}
	,{color:"green",id:"3"}
	,{color:"blue",id:"4"}
	,{color:"indigo",id:"5"}
	,{color:"violet",id:"6"}]

	let selectorIndex = 0;
	let blocks = [];
	for(let i =0;i<25;i++)
		blocks.push({color:colors[i%colors.length].color, id:colors[i%colors.length].id})
	// up = 38
	// down = 40
	// right = 39
	// left = 37

	function shuffleColors(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
	function onKeyDown(e) {
		 switch(e.keyCode) {
			 case 38:
				 selectorIndex -= 5;
				 break;
			 case 40:
				 selectorIndex += 5;
				 break;
			 case 37:
				 selectorIndex--;
				 break;
			 case 39:
				 selectorIndex++;
				 break;
			case 65: selected.push(selectorIndex);
				if(selected.length === 2){
					SwitchColors();
				}
				break;
		 }
		 selected = selected;
	}
	function SwitchColors(){
		let tempColor = blocks[selected[0]].color;
        blocks[selected[0]].color = blocks[selected[1]].color;
        blocks[selected[1]].color = tempColor;
        selected = [];
	}

	/*if(selected.length >= 2){
		console.log("TIME TO FLIP")
		for(let i = selected.length; i>=0; i--){
			selected.shift()
			console.log(selected)
		}
	}*/
    onMount(() => {
        shuffleColors(colors);
    });
</script>
<main>
    <div class="gridcontainer">
        {#each blocks as color, i}
            <div class="block" class:selector={selected.filter(value=>value==i).length>0} key={i} style="background-color: {color.color}; {selectorIndex==i?"border: 10px solid rgb(0, 255, 191);":""}"></div>
        {/each}
    </div>
</main>

<style>
	.gridcontainer{
		width:500px;
		height: 500px;
		border: 1px solid black;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: repeat(5,1fr);	
	}
	.block{
		border: 3px solid black;
	}
	main {
		width: 500px;
		height: 500px;
		margin: 10px auto;
		position: relative
	}


	.selector {
		border: 10px solid rgb(255, 0, 191);
	}
</style>




<svelte:window on:keydown|preventDefault={onKeyDown} />