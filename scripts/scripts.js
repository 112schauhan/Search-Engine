$searchForm=document.querySelector("#form-1")
$paragraphInput=$searchForm.querySelector('p')
$inputField=$paragraphInput.querySelector("#search")
$inputSubmitButton=$paragraphInput.querySelector("#submission")

const element=document.getElementById("slider")


function redirectToURL(btnId){
    if(btnId=="submission"){
        if($inputField.value){
           window.location.replace("https://www.google.com/search?q="+$inputField.value);
        }

        else{
            window.location.replace("#");
        }
    }    
}




