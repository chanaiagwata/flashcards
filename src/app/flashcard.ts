export class Flashcard {

    showDescription: boolean;
    
    constructor(public id:number, public name:string, public description:string){
        this.id = id;
        this.name = name;
        this.description = description;
        this.showDescription = false;
    }
}
