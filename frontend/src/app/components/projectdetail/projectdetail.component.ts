import { Component, OnInit} from '@angular/core';
import { ActivatedRoute,RouterModule,Router } from '@angular/router';
import { ProjectService } from '../../service/project/project.service';
import { MemberService } from 'src/app/service/member/member.service';
import { Project } from 'src/app/models/project';
import { Member } from 'src/app/models/member';

@Component({
  selector: 'app-projectdetail',
  templateUrl: './projectdetail.component.html',
  styleUrls: ['./projectdetail.component.css']
})
export class ProjectdetailComponent implements OnInit {
  breadcrumbs :string = 'Chi tiết dự án';
  url :string = '';
  id:number = Number(this.route.snapshot.params['id']);
  project = <Project>{};
  listMember : Member[] = [];
  member = <Member>{};
  memberInProject :Member [] = []; 

  constructor(
    private route: ActivatedRoute,private router: Router,
    private projectService: ProjectService,
    private memberService: MemberService) { }
  ngOnInit(): void {
    if(!this.id){
      return;
    }
    let result = this.projectService.getProjectById(this.id);
    if(result){
      let idLeader = result.leader;
      let idMember = result.member;
      this.listMember = this.memberService.getMembers();
  
      // Handle get fullname leader from id of project
      for(let i = 0; i < this.listMember.length; i++){
        if(this.listMember[i].id == idLeader){
          this.member = this.listMember[i];
        }

      // Handle get fullname member from id of project
        for(let j = 0;j< idMember.length;j++){
            if(this.listMember[i].id == idMember[j]){
             this.memberInProject.push(this.listMember[i]);
            } 
        }
      }
      this.project = result;
    }else{
      alert('Nooo ! Không tìm thấy dự án nào');
      this.router.navigate(['']);
    }
  }
}
