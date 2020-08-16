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

    constructor(
        private postService: PostService,
        private router: Router
    ){}
    

    onAddPost(form:NgForm){

        if(form.invalid){ //Check if Form is valid!
            return;
        }

        //Create a Post with Title and Description!
        this.postService.createPost(form.value.title, form.value.description);

        //Reset form after data is collected!
        form.resetForm();

    }
}