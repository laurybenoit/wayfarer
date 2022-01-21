import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PostDetailsComponent } from '../post-details/post-details.component';
import { PostComponent } from '../post/post.component';
import { CityComponent } from './city.component';

const cityRoutes: Routes = [
  {
    
        path:'cities/:cid',
        component: CityComponent,
        children: [{
          path:"posts/:pid",
          component:PostDetailsComponent 
        },
          {
          path:"posts",
          component:PostComponent
        }
        
          
        ]
      
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(cityRoutes)
  ],
  exports: [RouterModule]
})
export class CityRoutingModule {}