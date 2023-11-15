
<script>
let firstname =""
let lastname =""
let email =""
let password=""

$: info={firstname,lastname,email,password}

function handleSubmit(){
    console.log(info)

}
</script>
<body>
    
    <form on:submit|preventDefault={handleSubmit}>
        <h1>Registration form</h1>
        <div>
            <div class="Fullname">
                <label for="Firstname">First Name:</label>
                <input bind:value={firstname} id="Firstname"type="text"/>
                <label for="Lastname">Last Name:</label>
                <input bind:value={lastname} id="Lastname"type="text"/>
            </div>
            <div class="empass">
                <label for="Email">Email:</label>
                <input bind:value={email} id="Email"type="email"/>
                <label for="Password">Password:</label>
                <input bind:value={password} id="Password"type="password"/>
            </div>

        </div>
            <div><button type="submit">Register</button></div>
            <a id ="login" href="/login">Already have an account?</a>
            

    </form>
</body>

<style>
    #login{
        color:#ee4991;
        margin-left: 27%;
    }
    h1{
      color:#ee4991;
      
    }
    input{
        color: #ee4991; 
        font-size: medium;
        font-weight: 900;
        background-color:#f7adbf;
        border: 10px solid transparent;

    }
    label{
        background-color: pink;

    }
    button{
        background-color: #f7adbf;
        color: #ee4991;
        border-radius: 25px;
        width: 50%;
        font-size: large;
        height: 30px;
        width: 100px;
        padding: auto;
        margin-top: 10px;
        margin-left: 40%;
    }
    .empass, .Fullname{
        display: grid;
        border-radius: 25px;

    }
    form{
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-size: larger;
        font-weight: bold;
        color: rgb(221, 87, 137);
        background-color: pink;
        display: inline-block;
        width: 120vw;
        max-width: 500px;
        min-width: 300px;
        border-radius: 25px;
        padding: 50px;


        

    }
</style>