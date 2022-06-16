import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/app/models/member';
import { Project } from 'src/app/models/project';
import { MemberService } from 'src/app/service/member/member.service';
import { ProjectService } from 'src/app/service/project/project.service';

@Component({
  selector: 'app-updateproject',
  templateUrl: './updateproject.component.html',
  styleUrls: ['./updateproject.component.css'],
})
export class UpdateprojectComponent implements OnInit {
  FormProject!: FormGroup;
  Leader: Member[] = [];
  Member: any = [];
  project: any;
  breadcrumbs: string = 'Cập nhật dự án';

  id!: string;
  MemberArr: any = [];
  constructor(
    private formbuilder: FormBuilder,
    private memberService: MemberService,
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getLeader();
    this.getMember();
    this.getOneProject();
    this.getValueForm();

  }

  getOneProject() {
    this.id = this.route.snapshot.params['id'];
    if (!this.id) {
      this.router.navigate(['dashboard/project']);
    }
    this.projectService.getProjectById(this.id).subscribe((data: any) => {
      this.project = data.data;

      // CHECKED CHECKBOX
      setTimeout(() => {
        for (let value of this.Member) {
          let newObj = {};
          if (this.check(data.data.member, value._id)) {
            newObj = {
              ...value,
              isSelected: true,
            };
            this.MemberArr.push(newObj);
          } else {
            newObj = {
              ...value,
              isSelected: false,
            };
            this.MemberArr.push(newObj);
          }
        }
      },500)



      // SET VALUE FORM

      this.FormProject.patchValue({
        name: this.project.name,
        dateStart: this.project.dateStart,
        dateEnd: this.project.dateEnd,
        price: this.project.price,
        leader: this.project.leader._id,
        status: String(this.project.status),
      });
    });
  }
  check(member: any, id: string) {
    if (member.some((e: any) => e._id == id)) {
      return true;
    } else {
      return false;
    }
  }

  getValueForm() {
    this.FormProject = this.formbuilder.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      dateStart: ['', [Validators.required]],
      dateEnd: ['', [Validators.required]],
      price: ['', [Validators.required]],
      leader: ['', [Validators.required]],
      member: this.formbuilder.array([]),
      status: ['0', [Validators.required]],
    });
  }

  onCheckboxChange(e: any) {
    // const checkArray: FormArray = this.FormProject.get('member') as FormArray;
    // if (e.target.checked) {
    //   checkArray.push(
    //     new FormControl(
    //      e.target.value,
    //     )
    //   );
    // } else {
    //   let i: number = 0;
    //   checkArray.controls.forEach((item: any) => {
    //     if (item.value == e.target.value) {
    //       checkArray.removeAt(i);
    //       return;
    //     }
    //     i++;
    //   });
    // }
  }

  onSubmit() {
    this.updateProject();
  }

  updateProject() {
    const memberSelected: any = document.querySelectorAll('[id^="member"]:checked');
    let members: string[] = [];
    memberSelected.forEach((input: any) => {
        members.push(input.value);
    })    
    const data = {
      name: this.FormProject.value.name,
      dateStart: this.FormProject.value.dateStart,
      dateEnd: this.FormProject.value.dateEnd,
      price: this.FormProject.value.price,
      leader: this.FormProject.value.leader,
      member: members as any,
      status: Number(this.FormProject.value.status),
    };

    this.projectService.updateProject(data as Project, this.id).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/project'])
    });
  }

  getLeader() {
    this.memberService.getMembers().subscribe((data: any) => {
      let listMember = data.data;
      for (let member of listMember) {
        if (member.role == 'leader') {
          this.Leader.push(member);
        }
      }
    });
  }

  getMember() {
    this.memberService.getMembers().subscribe((data: any) => {
      let listMember = data.data;
      for (let member of listMember) {
        if (member.role == 'member') {
          this.Member.push(member);
        }
      }
    });
  }
}
