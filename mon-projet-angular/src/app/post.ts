export class Post {

    constructor(title: string,content: string, likeIts :number, dateCreated: Date ) {
        this.title = title;
        this.content = content;
        this.likeIts = likeIts;
        this.dateCreated = dateCreated

    }

    public title: string;
    public content: string; 
    public likeIts: number; 
    public dateCreated: Date
     
}