import { Component } from '@angular/core';
import {PostsService} from '../services/post.service';
@Component({
  moduleId : module.id,
  selector: 'user',
  templateUrl : 'user.component.html',
  providers : [PostsService]
})

export class UserComponent  { name:string; email:string; address:address; hobbies:string[]; showHobbies:boolean; posts:Post[];

constructor(private PostsService:PostsService){
  this.name='pop';
  this.email = 'pop@gmail.com';
  this.address = {
    street:'20',
    city:'hogwarts',
    state:'en'
  };
    this.hobbies=['anime','tt'];
    this.showHobbies = false;

    this.PostsService.getPosts().subscribe( posts => {
      console.log(posts);
      this.posts=posts;
    });
  }

  toggleHobbies(){
    if(this.showHobbies==false){
      this.showHobbies=true;
    }else{
      this.showHobbies=false;
    }
  }

  addhobby(hobby : any){
    this.hobbies.push(hobby);
  }

  deletehobby(i : any){
    this.hobbies.splice(i,1);
  }

}



interface address{
  street:string;
  city:string;
  state:string;
}

interface Post{
  id:number;
  title:string;
  body:string;
}
