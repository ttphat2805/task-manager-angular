import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member';
import { MemberService } from 'src/app/service/member/member.service';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent implements OnInit {
  breadcrumbs :string = 'Thêm dự án';
  constructor(private memberService: MemberService) { }
  listMember: Member[] = [];
  ngOnInit(): void {
    this.listMember = this.memberService.getMembers();
  }

}
