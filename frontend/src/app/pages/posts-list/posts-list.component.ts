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
    this.postService.getPosts();
    console.log(this.posts);
    this.postsSubscription = this.postService.getPostsUpdateListener().subscribe(
      (posts:Post[]) => {
        this.posts = posts;
      }
    );
  }

  ngOnDestroy(){
    this.postsSubscription.unsubscribe();
  }
  
  deletePost(post: Post){
    if(confirm("Are you sure to delete : "+post.title+"?")){
      this.postService.deletePost(post._id);
    }
  }

}
