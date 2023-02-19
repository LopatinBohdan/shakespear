export class Film{
    constructor(title, director, releaseDate, actors=[], studio, poster){
        this.title=title;
        this.director=director;
        this.releaseDate=releaseDate;
        this.actors=actors;
        this.studio=studio;
        this.poster=poster;
    }
}