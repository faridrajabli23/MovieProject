const movieForm = document.getElementById("movie-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clearButton = document.getElementById("clear-movies");

eventListener();

function eventListener(){
    movieForm.addEventListener("submit", addMovie);
    window.addEventListener("DOMContentLoaded",UI.loadData);
    cardbody.addEventListener("click", removeMovie);
    clearButton.addEventListener("click", removeAllElement);
}

function removeAllElement(e){
    UI.removeAllData();
    Storage.removeAllData();
    UI.addMessageToUI("Operatin was be success","success");

    e.preventDefault();
}

function removeMovie(e){
    let MovieTitle;
    if(e.target.id === "delete-movie"){
        UI.deleteDataFromStorage(e.target);
        Storage.deleteDataFromStorage(e.target);
        UI.addMessageToUI("Operation was be success","success");
    }

}
function addMovie(e){
    let title = titleElement.value;
    let director = directorElement.value;
    let url = urlElement.value;

    if(title == "" || director == ""  || url == ""){
        UI.addMessageToUI("Please enter all data","danger");
    }
    else{
        UI.addDataToUI(title, director, url);
        Storage.addDataToStorage(title, director, url);
        UI.addMessageToUI("Success","success");
    }
    e.preventDefault();
}
