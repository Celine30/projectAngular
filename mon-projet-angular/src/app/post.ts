export class Post {

    constructor(title: string,content: string, LoveIts: number, created_at: Date ) {
        this.title = title;
        this.content = content;
        this.LoveIts = LoveIts;
        this.created_at = created_at

    }

    public title: string;
    public content: string; 
    public LoveIts: number; 
    public created_at: Date
     
}