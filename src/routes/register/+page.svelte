
<script>
    let firstname =""
    let lastname =""
    let email =""
    let Repeatemail=""
    let password=""
    let Phonenumber =""
    let Cselected;
    let Lselected;
    
    $: info={firstname,lastname,email,password, Phonenumber}
    
    function handleSubmit(){
        if (email === Repeatemail){
            console.log(info);
        }
        else{
            const alertElements = document.getElementById("alert");
            alertElements.style.display = 'block';

        }

    
    }
    </script>
    <div id="alert">
        <span class = "closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
        <strong>Dessa adresser stämmer inte överens!</strong>Vänligen skriv om igen </div>

    <body>
        
        <form on:submit|preventDefault={handleSubmit}>
            <h1>Princess registration form</h1>

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
                    <label for="Repeatemail">Repeat Email:</label>
                    <input bind:value={Repeatemail} id="Email"type="email"/>
                    <label for="Password">Password:</label>
                    <input bind:value={password} id="Password"type="password"/>
                    <label for="Phonenumber">Phonenumber:</label>
                    <input bind:value={Phonenumber} id ="Phonenumber"type="number" />

                    <div>
                        <label id="criminal"for="criminal">Any criminal history?</label>
                        <label>
                            <input bind:group={Cselected} type="radio" name="criminal" value="yes" /> yes
                        </label>
                        <label>
                            <input bind:group={Cselected} type="radio" name="criminal" value="no" /> no
                        </label>
                    </div>
                    <div>
                        <label id="license"for="license">Do you have a drivers license</label>
                        <label>
                            <input bind:group={Lselected} type="radio" name="license" value="yes" /> yes
                        </label>
                        <label>
                            <input bind:group={Lselected} type="radio" name="license" value="no" /> no
                        </label>
                    </div>
                    
                </div>
    
            </div>
                <div>
                    <button type="submit">Register</button>
                </div>

                <a id ="login" href="/login">Already have an account?</a>
                <a id ="princess" href="/princeregister">Are you a prince?</a>
                
    
        </form>
    </body>
    
<style>



    input[type="radio"]{
        accent-color: #ee4991;
    }
    #login{
        color:#ee4991;
        margin-left: 27%;
    }
    #princess{
        color:#ee4991;
        margin-left: 33%;

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
    input:focus{
        outline: none !important;
        background-color: #f390a9;
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
    #alert{
        position:fixed;
        display:none;
        top: 10%;
        left: 35%;
        z-index: 1;
        padding: 20px;
        background-color: #ee4991;
        color: white;
    }

    .closebtn{
        margin-left: 15px;
        color: white;
        font-weight: bold;
        float: right;
        font-size: 22px;
        line-height: 20px;
        cursor: pointer;
        transition: 0.3s;
    }
    .closebtn:hover{
        color:black;
    }
</style>