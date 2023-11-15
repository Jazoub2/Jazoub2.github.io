
<script>
    function handleSubmit(){
        console.log("login succesfull")
    }
    </script>

    <body>
        <form on:submit|preventDefault={handleSubmit}>
            <h1>Login</h1>
                <div class="empass">
                    <label for="Email">Email:</label>
                    <input id="Email"type="email"/>
                    <label for="Password">Password:</label>
                    <input id="Password"type="password"/>
                </div>
                <div><button type="submit">login</button></div>
        </form>
    </body>
    
    <style>
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
        .empass{
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