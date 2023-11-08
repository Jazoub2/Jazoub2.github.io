<h1>Registration form</h1>
<script>
function handleSubmit(){
    console.log("Form submitted!")
}
</script>

<form on:submit|preventDefault={handleSubmit}>
    <label for="Firstname">First Name:</label>
    <input id="Firstname"type="text"/>
    <label for="Lastname"> Last Name:</label>
    <input id="Lastname"type="text"/>

    <label for="Email">Email:</label>
    <input id="Email"type="email"/>
    <label for="Password">Password:</label>
    <input id="Password"type="password"/>

    <button type="submit">Register
    
    </button>

</form>
<style>
    form{
        display: grid;
        width: 60vw;
        max-width: 500px;
        min-width: 300px;
        margin: 10px;
    }
</style>