import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  breadcrumbs = {
    name: '',
    url : '',
  };
  onActivate(componentRef:any){
    console.log(componentRef);
    
    this.breadcrumbs.name = componentRef.breadcrumbs;
    this.breadcrumbs.url = componentRef.url;
    
  }
}
