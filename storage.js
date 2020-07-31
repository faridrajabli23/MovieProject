class Storage{
    static loadDataFromStorage(){
        let data;
        if(localStorage.getItem("movies") === null){
            data = [];
        }
        else{
            data = JSON.parse(localStorage.getItem("movies"));
        }

        return data;
    }
    static addDataToStorage(title, director, url){
        let movie = new Movie;
        movie.title = title;
        movie.director = director;
        movie.url = url;

        let data = Storage.loadDataFromStorage();

        data.push(movie);

        localStorage.setItem("movies", JSON.stringify(data));
    }
    static deleteDataFromStorage(element){
        let movieTitle = element.parentElement.previousElementSibling.previousElementSibling.textContent;
        
        let data = Storage.loadDataFromStorage();
        let item;

        for(let i of data){
            if(i.title == movieTitle){
                item = i;
            }
        }
        const index = data.indexOf(item);
        if (index > -1) {
            data.splice(index, 1);
        }

        localStorage.setItem("movies", JSON.stringify(data));
    }
    static removeAllData(){
        let data = [];

        localStorage.setItem("movies",JSON.stringify(data));
    }
}