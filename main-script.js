function getImage(){
    //get the element we want to change
    var picSpot = document.getElementById("coolPhoto");
    picSpot.innerHTML="<img src = 'images/conan.jpeg'/>";
    }
    
    function hideImage(){
    var picSpot = document.getElementById("coolPhoto");
    picSpot.innerHTML="";
    }