<script>
let tasks= [];
let newtask;
function addTask(){
    tasks = [{task:newtask,state:"todo"},...tasks]
}
function doingTask(i){
    tasks[i].state = "doing";
    tasks = tasks;
}
function doneTask(i){
    tasks[i].state = "done";
    tasks = tasks;
}
function removeTask(i) {
    tasks.splice(i,1)
    tasks = tasks
   // tasks = tasks.filter((_, index) => index !== i);
}
</script>

<div class="container">
        <div id="todoborder">
            <h1 style="padding-left:38px">(HACKER) TODO LIST</h1>
        </div>
    <div class="layout">
        
            <div id="todo">
                <h1 style="padding-left:10px">TODO</h1>
                <input bind:value={newtask} type="text"/>
                <button id="todobutton" on:click={addTask}>+</button>
                <ul>
                    {#each tasks as { task, state }, i}
                    {#if state=="todo"}
                    <li>
                        {task} <button on:click={() => doingTask(i)}>Doing</button><button on:click={() => removeTask(i)}>Remove</button>
                     </li>
                    {/if}
                        
                    {/each}
                </ul>
            </div>

        <div id="Doing">
            <h1>Doing</h1>
            {#each tasks as { task, state }, i}
            {#if state=="doing"}
            <li>
                {task} <button on:click={()=>doneTask(i)}> done</button> <button on:click={() => removeTask(i)}>Remove</button>
             </li>
            {/if}
                
            {/each}
        </div>

        <div id="completed">
            <h1>Done</h1>
            {#each tasks as { task, state }, i}
                {#if state=="done"}
                    <li>
                    {task}<button on:click={() => removeTask(i)}>Remove</button>
                    </li>
                {/if}
                
             {/each}
         </div>

    </div>
</div>








<style>
    h1{
        color:lime;
    }
    button{
       color: lime;
       background-color: black;
       margin-top: 10px;
       border-width: 5px;
       border-color:lime;
       margin: 5px;


    }
    #todobutton{
        width:10%;
    }
    #completed{
        color:lime;
        display: grid;
        border-style:solid;
        border-width: 10px;
        padding-left: 10px;
        border-color: rgb(80,80,80);
        width: 95.9%
        
    }
    #todoborder{
        border-style:solid;
        border-width: 10px;
        border-color: rgb(80,80,80);
    }
    #Doing{
        display: grid;
        border-style:solid;
        border-width: 10px;
        padding-left: 10px;
        border-color: rgb(80,80,80);
        color:lime;
    }
    #todo{
        grid-template-columns: repeat(2, 1fr);
        border-style:solid;
        border-width: 10px;
        padding-left: 10px;
        border-color: rgb(80,80,80);
        color:lime;
    }
    input[type="text"]{
        
        color: lime;
        background-color:rgb(10, 10, 10);
        font-size: medium;
        font-weight: 800;
        width: 75%;
        border-color: transparent;


        

    }
    input[type="text"]:hover{
        border-color: lime;
        border-width: 3px;
    }
    input[type="text"]:focus{

        border-color: lime;
        border-width: 3px;
        outline:none

    }
.layout{
    display: grid;
    width: 98.5%;
    grid-template-columns: repeat(3, 33%);

    border-style: solid;
    border-width: 10px;
    border-color: rgb(50,50,50);
}
.container{
background-color:rgb(0, 0, 0);

 width: 80vw;
 height: 70%;

 margin-left: 50px;
 margin-top: 50px;

 border-style: solid;
 border-width: 10px;
 border-color:rgb(30, 30, 30);
}

:global(body){
    background-image:url("https://images.pond5.com/4k-matrix-style-binary-codefalling-footage-088723982_prevstill.jpeg");
}
</style>