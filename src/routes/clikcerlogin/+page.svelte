<script>
    let lettersString = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ".split("")

    let letters = [];
    let username = ""

    for (let letter of lettersString){
        letters.push({letter:letter,top:10+Math.random()*80,left: 10+Math.random()*80})
        
    }
    setInterval(()=>{
        letters=[]
        for (let letter of lettersString){
        letters.push({letter:letter,top:10+Math.random()*80,left: 10+Math.random()*80})
        }
    },Math.random()*5000)
    function addLetter(letter,i){
        username += letter;
        letters[i].top = Math.random()*100
        letters[i].left = Math.random()*100
        letters = letters;
    }

</script>
<h1>Logga in som {username}</h1>
<div class ="container">
    {#each letters as {letter,top,left},i}
    <button on:click={()=>addLetter(letter,i)} style ="position: sticky; top:{top}%; left:{left}%;" >{letter}</button>
{/each}
</div>



<style>
    button{
        background-color: black ;
        color: lime;
    }
    .container{
        width: 500px;
        height: 500px;
        background-color: rgb(0, 0, 0);
        margin: auto;
    }
</style>