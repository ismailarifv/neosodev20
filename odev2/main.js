function openFile(event){
    let input =event.target;
    
    let reader =new FileReader();
    reader.onload = function(){
        let dataURL = reader.result;
        let output = document.getElementById("images")
        output.src= dataURL;
    };
    reader.readAsDataURL(input.files[0])
}