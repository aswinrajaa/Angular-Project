import { Component, OnInit, OnDestroy } from '@angular/core';
import Post from 'src/app/models/post';
import { PostService } from 'src/app/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  private postsSubscription: Subscription;

  constructor(private postService: PostService) { }

  ngOnInit(){
    
    //Get All Posts
    this.postService.getPosts();
    
    //Subscription for Posts
    this.postsSubscription = this.postService.getPostsUpdateListener().subscribe(
      (posts:Post[]) => {
        this.posts = posts;
      }
    );

  }

  ngOnDestroy(){

    //Delete Subscription on Posts!
    this.postsSubscription.unsubscribe();

  }
  
  deletePost(post: Post){
    
    //Ask confirmation
    if(confirm("Are you sure to delete : "+post.title+"?")){

      //Delete a Post with it's id!
      this.postService.deletePost(post._id);
      
    }

  }

}
