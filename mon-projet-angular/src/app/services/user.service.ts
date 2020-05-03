import { User} from '../user'
import { Subject } from 'rxjs';

export class UserService{
    

    public users = [
        new User(
            "Céline",
            "Caurier",
            "celi.caurier@gmail.com",
            "Astier",
            ["coder","manger"]
        ),
        new User(
            "Céline",
            "Caurier",
            "celi.caurier@gmail.com",
            "Astier",
        ),
    ]

    userSubject = new Subject<any>();

    emitUserSubject (){
        this.userSubject.next(this.users.slice());
    }

    addUser(user:User){
        this.users.push(user);
        this.emitUserSubject()
    }

}