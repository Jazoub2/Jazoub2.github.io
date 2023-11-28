
<script>
    function handleSubmit(){
        console.log("login succesfull")
    }
    </script>

    <body>
        <form on:submit|preventDefault={handleSubmit}>
            <h1>Prince login</h1>
                <div class="empass">
                    <label for="Email">Email:</label>
                    <input id="Email"type="email"/>
                    <label for="Password">Password:</label>
                    <input id="Password"type="password"/>
                </div>
                <div><button type="submit">Login</button></div>
        </form>
    </body>
    
    <style>
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
            background-color: #add2f7;
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
        .empass{
            display: grid;
            border-radius: 25px;
    
        }
        form{
            font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
            font-size: larger;
            font-weight: bold;
            color: #3493f3;
            background-color: #add2f7;
            display: inline-block;
            width: 120vw;
            max-width: 500px;
            min-width: 300px;
            border-radius: 25px;
            padding: 50px;

        }
    </style>