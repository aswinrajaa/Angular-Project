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
        this.Posts = post;
        console.log(this.Posts);
        this.postsUpdated.next([...this.Posts]);
    });
  }
  
  getPostsUpdateListener(){
    return this.postsUpdated.asObservable();
  }

  getPost(postId: string){
    return this.webService.get(`posts/${postId}`);
  }

  createPost(title: string, description: string){
    this.webService.post('posts', { title, description }).subscribe(
      (post:Post) => {
        this.Posts.push(post);
        this.postsUpdated.next([...this.Posts]);
    });
  }

  deletePost(postId: string){
    var deleteUpdate = this.webService.delete(`posts/${postId}`);
    deleteUpdate.subscribe((post:Post) => {
      this.Posts.splice(this.Posts.indexOf(post),1);
      this.postsUpdated.next([...this.Posts]);
    })
  }

}
