export class Post {

    constructor(id :number , picture : string ,name: string, content: string, birth : string , age : string, nationality : string , job :string,  likeIts :number) {
        this.id = id;
        this.picture = picture;
        this.name = name;
        this.content = content;
        this.birth = birth;
        this.age = age;
        this.nationality = nationality;
        this.job = job;
        this.likeIts = likeIts;
        

    }

    public id: number;
    public picture: string;
    public name: string;
    public content: string; 
    public birth : String;
    public age :String;
    public nationality :string;
    public job : string;
    public likeIts: number; 
     
}