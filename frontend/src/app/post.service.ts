import { Injectable } from '@angular/core';
import { WebService } from './web.service';
import Post from './models/post';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private Posts : Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private webService: WebService) { }

  getPosts(){
    this.webService.get('posts')
      .subscribe((post: Post[]) => {
        this.Posts = post; //Get and Add all posts
        this.postsUpdated.next([...this.Posts]); //Update to Subscription!
    });
  }
  
  getPostsUpdateListener(){
    return this.postsUpdated.asObservable(); //Observable
  }

  getPost(postId: string){
    return this.webService.get(`posts/${postId}`); //Not Used
  }

  createPost(title: string, description: string){
    this.webService.post('posts', { title, description }).subscribe(
      (post:Post) => {
        this.Posts.push(post); //Post response on creating a post!
        this.postsUpdated.next([...this.Posts]); //Update to Subscription on Adding new Post!
    });
  }

  deletePost(postId: string){
    var deleteUpdate = this.webService.delete(`posts/${postId}`);
    deleteUpdate.subscribe((post:Post) => {
      console.log(post);
      console.log(this.Posts);
      console.log(this.Posts.indexOf(post));
      var count = 0, index = 0;
      this.Posts.forEach(thispost => {
        if(thispost._id == post._id){
          index = count;
          return false;
        }
        count++;
      });
      this.Posts.splice(index,1); //Post response on deleting a post!
      this.postsUpdated.next([...this.Posts]); //Update to Subscription on Deleting a Post!
    })
  }

}
