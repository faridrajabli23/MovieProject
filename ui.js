class UI{
    static addDataToUI(title, director, url){
        const movies = document.getElementById("movies");
        movies.innerHTML += `

        <tr>
            <td><img src="${url}" class="img-fluid img-thumbnail"></td>
            <td>${title}</td>
            <td>${director}</td>
            <td><a href="#" id = "delete-movie" class = "btn btn-danger">Delete Movie</a></td>
        </tr> 

        `;
        document.getElementById("title").value = "";
        document.getElementById("url").value = "";
        document.getElementById("director").value = "";
    }
    static addMessageToUI(text, type){
        const cardBody = document.querySelectorAll(".card-body")[0];
        const message = document.createElement("div");
        message.className = `alert alert-${type}`;
        message.textContent = text;
        cardBody.appendChild(message);
        setTimeout(function () { message.remove(); }, 2000);
    }
    static loadData(){
        let data = Storage.loadDataFromStorage();

        if(!data == null || !data.length == 0){
            let movieTable = document.getElementById("movies");
            for(let i of data){
                movieTable.innerHTML += `
                    <td><img src="${i.url}" class="img-fluid img-thumbnail"></td>
                        <td>${i.title}</td>
                        <td>${i.director}</td>
                        <td><a href="#" id = "delete-movie" class = "btn btn-danger">Delete movie</a></td>
                    </tr>
                
                `
            }
        }
    }
    static deleteDataFromStorage(element){
        element.parentElement.parentElement.remove();
    }
    static removeAllData(){
        const movieList = document.getElementById("movies");
        
         while(movieList.firstElementChild !== null) {
            movieList.firstElementChild.remove();
         }
    }
}