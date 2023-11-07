<script>

    let photo = "https://commondatastorage.googleapis.com/images.pricecharting.com/8a6f9dbf9fb8b2df4f368542f93cf2204164cb14370c13be95d3bc0b3b4e09ac/240.jpg"
    let picture = "https://cdn.nivoli.com/adventuregamers/images/screenshots/16684/9845.jpg"
    let image = "https://3.bp.blogspot.com/-sF40J9nq52U/WKHFXGXMcGI/AAAAAAAAH_w/gEytnI17X-0QGFJEvLGxYe_F5kJJHGALQCLcB/s1600/image%2B2-01%2B%2528dungeon%2Bmaster%2529.png"
    let images = [picture, photo, image];
</script>


<title>
    Ellron's Shadow Legion: Guardians of the Zorkian Realm
</title>


<h1>Ellron's Pictorial Archive: Portals to Zork's Past</h1>

<div class = "photos">
    <div class ="image-wrapper">
        <img src={images[2]} alt="zork rules">  
    </div>
    <div class= "image-wrapper">
        <img src={images[0]} alt="ERROR WITH LOADING">
    </div>
    <div class= "image-wrapper">
        <img src={images[1]} alt="ERROR WITH LOADING"> 
    </div>
</div>



<style>
   .photos{
    display: flex;
    direction: column;
    align-items: center;
    justify-content: space-around;
    max-width: 90vw; overflow: wrap;
   }     
   .photos img {
    max-width: 45%;
   }
   .image-wrapper img{
    flex:1;
    max-width:90%;
    padding: 5px;
   }
</style>