
<script>
    let firstname =""
    let lastname =""
    let email =""
    let password=""
    let Phonenumber =""
    let Cselected;
    let Lselected;
    
    $: info={firstname,lastname,email,password, Phonenumber}
    
    function handleSubmit(){
        console.log(info)
    
    }
    </script>

    <body>
        
        <form on:submit|preventDefault={handleSubmit}>
            <h1>Prince registration form</h1>

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

                <a id ="login" href="/pricelogin">Already have an account?</a>
                <a id ="princess" href="/register">Are you a princess?</a>
                
    
        </form>
    </body>
    
    <style>
        #license{
            margin-bottom: 15px;
        }
        #criminal{
            margin: 5px 0px;
            display:inline;
        }
        #login{
            color:#3493f3;
            margin-left: 27%;
        }
        #princess{
            color:#3493f3;
            margin-left: 33%;
    
        }
        h1{
          color:#3493f3;
          
        }
        input{
            color: #1169c1;
            font-size: medium;
            font-weight: 900;
            background-color:#85b6e6;
            border: 10px solid transparent;
    
        }
        input:focus{
            outline: none !important;
            background-color: #5aa3ec;
        }
        
        label{
            background-color: #add2f7;
        }
        button{
            background-color: #add2f7;;
            color: #3493f3;
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
            color:#3493f3;
            background-color: #add2f7;
            display: inline-block;
            width: 120vw;
            max-width: 500px;
            min-width: 300px;
            border-radius: 25px;
            padding: 50px;
        }
    </style>