import { Component, Input } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent {
  // posts = [
  //   {
  //     title: 'First Post',
  //     content: 'Content Post',
  //   },
  // ];
  @Input() posts:Post[] = [];

  constructor(public postService:PostService){}


  
}
