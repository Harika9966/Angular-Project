import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Post } from './post.model';
import { PostsService } from './posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-httprequest',
  templateUrl: './httprequest.component.html',
  styleUrls: ['./httprequest.component.css']
})
export class HTTPRequestComponent implements OnInit {

  loadedPosts:Post[] = [];
  isFetching = false;
  error=null;
  constructor(private http: HttpClient,private postsService:PostsService) { }

  ngOnInit(){


    this.isFetching=true;
    this.postsService.fetchPosts().subscribe(posts => {
      this.isFetching=false;
      this.loadedPosts=posts;
    },
    error =>{
      this.error=error.message;
      console.log(error);
    }
    );
  }
  onCreatePost(postData: Post) {
    // Send Http request
    // this.http.post<{name:string}>(
    //   'https://ng-project-23cd6-default-rtdb.firebaseio.com/posts.json',
    //   postData
    // ).subscribe(responseData => {
    //   console.log(responseData);
    // });
    // console.log(postData);
    this.postsService.createAndStorePost(postData.title,postData.content);
  }

  onFetchPosts() {
    // Send Http request
    this.isFetching=true;
    this.postsService.fetchPosts().subscribe(posts => {
      this.isFetching=false;
      this.loadedPosts=posts;
    },
    error =>{
      this.isFetching=false;
      this.error=error.message;
      console.log(error);
    }
    );
  }

  onClearPosts() {
    // Send Http request
    this.postsService.deletePosts().subscribe( ()=> {
      this.loadedPosts=[];  
    });
  }
  onHandleError(){
    this.error =null;
  }
  private fetchPosts(){
    // this.isFetching = true;
    // this.http.get<{ [ key:string ]: Post}>('https://ng-project-23cd6-default-rtdb.firebaseio.com/posts.json')
    // .pipe(
    //   map(responseData => {
    //   const postsArray:Post[]=[];
    //   for(const key in responseData){
    //     if(responseData.hasOwnProperty(key)) {
    //     postsArray.push({...responseData[key],id:key });
    //   }
    //   }
    //   return postsArray;
    // }))
    // .subscribe(posts => {
    //   this.isFetching=false;
    //   this.loadedPosts=posts;
    //   console.log(posts);
    // })
  }
}
