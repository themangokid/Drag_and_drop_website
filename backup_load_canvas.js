
/*Not working, yet*/

console.log('UPLOAD TO CANVAS HAS BEEN RAN!')

window.onload = function(){
    document.getElementById("imageCanvas")
    console.log('WE ARE NOW INSIDE THE LOAD PAGE FUNCTION!°!!')
    var loadFile = function(event) {
        var image = document.getElementById('output');
        image.src = URL.createObjectURL(event.target.files[0]);
        console.log(image)

    }


    function handleImage(e){
        var reader = new FileReader();
        reader.onload = function(event){
            var img = new Image();
            img.onload = function(){
                imageCanvas.width = img.width;
                imageCanvas.height = img.height;
                ctx.drawImage(img,0,0);
            }
            img.src = event.target.result;
        }
        reader.readAsDataURL(e.target.files[0]);
        console.log(reader)
    }
}
