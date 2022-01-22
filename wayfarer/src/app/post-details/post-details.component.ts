import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CITIES } from '../city/cities';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  posts:any;
  post:any;
  city:any;
  cities = CITIES;
  postIndex: string| null = '';  // Union type
  cityIndex: string| null = '';  // Union type
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("Post Details: All cities"+this.cities);
    
    this.route.paramMap.subscribe(param => {// deal with the id parameter
     
      this.cityIndex = param.get('cid');
      this.postIndex = param.get('pid');
      console.log("Post Details: cityIdex "+this.cityIndex);
      console.log("Post Details: postIdex"+this.postIndex);
  
      //find by city by index
      this.city = CITIES.find(j => {
          const paramId:string = param.get('cid') || '';
          return j.id === parseInt(paramId)
        });
       console.log("Post info ==> city info :"+ this.city);

      
        // parse post index to into
        
        const postId:string = this.postIndex || '';

       this.post = this.city.post[parseInt(postId)];
         
      console.log("Post info"+ this.city.post[parseInt(postId)]);
  
        
  })
}
}
