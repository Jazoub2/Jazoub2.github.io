<script>
    import { each } from "svelte/internal";

let username =""
let alphabetnumber = 0
let inputValue =""
let romanHelp = ["I=1","V=5","X=10","L=50","C=100","D=500","M=1000"]
let alphabetHelp = ["A=1","B=2","C=3","D=4","E=5","F=6","G=7","H=8","I=9","J=10","K=11","L=12","M=13","N=14","O=15","P=16","Q=17","R=18","S=19","T=20","U=21","V=22","W=23","X=24","Y=25","Z=26"
];

//gör om siffra 1-26 till bokstav. 1=A
function addLetter(alphabetnumber){
    const letter = String.fromCharCode(alphabetnumber-1 + 'A'.charCodeAt(0))
    username+= letter
    console.log(letter)
    
}

//Kollar om romerska nummeret är giltigt
function validateRoman(input){
    const romanNumeralPattern = /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
    const value = inputValue.toUpperCase();

    if (!value.match(romanNumeralPattern) && value !== '') {
        console.log("ERROR: NOT A ROMAN NUMERAL")
        inputValue = inputValue.slice(0, -1); // Remove the last character
    } else {
        console.log("ROMAN NUMERAL:)")
        romanToNum(value)
    }
}

function romanToNum(roman) {
    const romanNumerals = {
        'I': 1,'V': 5,'X': 10,'L': 50,'C': 100,'D': 500,'M': 1000
    };
    let result = 0;
    for (let i = 0; i < roman.length; i++) {
        if (i > 0 && romanNumerals[roman[i]] > romanNumerals[roman[i - 1]]) {
            result += romanNumerals[roman[i]] - 2 * romanNumerals[roman[i - 1]];
        } else {
            result += romanNumerals[roman[i]];
        }
    }
    console.log(result)
    alphabetnumber = result;
    return alphabetnumber;
}
</script>



<div class="container">
    <p id="username">Username:{username}</p>
    <div>
        <input type ="text" id="romaninput" bind:value={inputValue} on:input={validateRoman}>
        <button on:click={()=>addLetter(alphabetnumber)}>Translate</button>
    </div>
    <div class="Helpclass">
        <p>ROMAN NUMERALS</p>
        {#each romanHelp as helps}
         <p>{helps}</p>
        {/each}
    </div>
    <div class="letters">
        {#each alphabetHelp as alphahelps,i}
        <ul>
            {alphahelps}
        </ul>  
        {/each}
    </div>
</div>

<style>

    .letters{
        position: absolute;
        right: 400px;
        top: 200px;
        height: 230px;
        width: 400px;   
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        background-color:rgb(218, 127, 142); 
        border-radius:10px;
        padding: 10px;
        border-width: 10px; 
        
    }
    .container{
    width: 800px;
    height: 400px;
    background-color: pink;
    margin-left: 25%;
    margin-top: 50px;
    border-radius: 20px;

    }
    #username{
        background-color: rgb(218, 127, 142);
        width: 25%;
        border-radius: 5px;
        
    }
    .Helpclass{
        position: absolute;
        top: 200px;
        left: 400px;
        background-color: rgb(218, 127, 142);
        border-radius:10px;
        padding: 10px;
        border-width: 10px;
    }
    button{
        background-color:rgb(218, 127, 142);
        border-radius: 10px;
        padding: 2px;
        border-width: 5px;
    }
    input{
        border-radius: 5px;
    }
</style>