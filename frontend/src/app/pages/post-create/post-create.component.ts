import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/post.service';

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent{

    fileUploaded = null;

    constructor(
        private postService: PostService,
        private router: Router
    ){}
    

    onAddPost(form:NgForm){
        if(form.invalid){
            return;
        }
        this.postService.createPost(form.value.title, form.value.description);
        form.resetForm();
    }
}