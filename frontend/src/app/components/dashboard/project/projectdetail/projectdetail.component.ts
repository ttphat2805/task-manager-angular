import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/service/project/project.service';

@Component({
  selector: 'app-projectdetail',
  templateUrl: './projectdetail.component.html',
  styleUrls: ['./projectdetail.component.css']
})
export class ProjectdetailComponent implements OnInit {
  breadcrumbs :string = 'Chi tiết dự án';
  url :string = '';
  id!:string;

  project = <any>{};

  constructor(
    private route: ActivatedRoute,private router: Router,
    private projectService: ProjectService,
  ) { }
  ngOnInit(): void {
    this.getOneProject();
  }

  getOneProject(){
    this.id = this.route.snapshot.params['id'];
    if(!this.id){
      this.router.navigate(['/project'])
    }
    this.projectService.getProjectById(this.id).subscribe((data:any) => {
      console.log(data);
      
      this.project = data.data;

    });
  }
}
