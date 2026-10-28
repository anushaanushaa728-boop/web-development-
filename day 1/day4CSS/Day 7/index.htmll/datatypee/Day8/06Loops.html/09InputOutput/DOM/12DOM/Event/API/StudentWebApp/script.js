const API_URL="https://jsonplaceholder.typicode.com/users";

//select html element/tag
const title=document.getElementById("title");
const searchInput=document.getElementById("searchInput");
const searchButton=document.getElementById("searchButton");

const loadbtn=document.getElementById("loadbtn");
const status=document.getElementById("status");
const profilecountt=document.getElementById("profilecount");
const conatiner=document.getElementById("container");

///change the heading
title.textcontainer="explore user profile"

//fetch(API_URL)

async function loadProofile(){
    status.textcontainer="loading profile...."
    loadbtn.disabled=true;
    try{
        //succeessfull

        const response=await fetch(API_URL)
            if(!response.ok){
                throw new Error("Unable To load Profiles")
            }

        const users=await response.json(){
            console.log(users)
            
        }        


}catch(error){
    //unsuccessfull
    const message=document.createElement("p");
    message.classNmae="empty-message"
    message.textcontent="could not load profiles.check your internet conn and try again";

    profileCount.textContent="profiles displayed:0";
}