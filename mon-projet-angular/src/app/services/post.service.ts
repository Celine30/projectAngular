import { Post} from '../post'

export class PostService {
    
    posts = [
        new Post('Le 1er Post','Lorem',2,new Date()),
        new Post('Le 2eme Post','Lorem',2,new Date()),
        new Post('Le 3eme Post','Lorem',2,new Date()),
        new Post('Le 4eme Post','Lorem',2,new Date()),
        ] 
   
}