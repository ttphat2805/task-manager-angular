import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member';
import { AuthService } from 'src/app/service/auth/auth.service';
import { MemberService } from 'src/app/service/member/member.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  searchKey:string = '';
  breadcrumbs :string = 'Danh sách thành viên';
  url :string = 'member';

  listMember : Member[] = [];
  constructor(private memberService :MemberService,
    private authService :AuthService
    ) { }

  ngOnInit(): void {
    this.listMember = this.memberService.getMembers();

  }

}
