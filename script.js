//event listener will trigger when the DOM is loaded on visiting web page
addEventListener("DOMContentLoaded", async function(){
    const response = await fetch("https://m06-tutorial-backend.onrender.com/api/songs")
    const songs = await response.json()

    let html = ""
    for (let song of songs){
        html+=`<li>${song.title} - ${song.artist}</li>`
    }

    document.querySelector("#addedsong").innerHTML = html 
    
})