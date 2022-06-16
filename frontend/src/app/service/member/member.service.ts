import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from 'src/app/models/member';
@Injectable({
  providedIn: 'root'
})
export class MemberService {
  url = 'http://localhost:5000/api/member';
  // listMember : Member[] = [
  //   {id:1,email:'phattran@gmail.com',fullname:'Trần Tấn Phát',mobile:'0364303994',date:'2002-05-28',sex:1,area:'Nam',status:1},
  //   {id:2,email:'ducthang@gmail.com',fullname:'Vo Duc Thang',mobile:'0333777888',date:'2001-07-09',sex:1,area:'Nam',status:1},  
  //   {id:3,email:'duynghi@gmail.com',fullname:'Nguyễn Duy Nghi',mobile:'0345677899',date:'2002-12-28',sex:1,area:'Nam',status:1},  
  //   {id:4,email:'dungtoan@gmail.com',fullname:'Sú Dũng Toàn',mobile:'0377894455',date:'2000-11-17',sex:1,area:'Trung',status:1}, 
  //   {id:5,email:'hoangtrieu@gmail.com',fullname:'Nguyễn Hoàng Triệu',mobile:'0678945612',date:'2002-09-12',sex:1,area:'Nam',status:1},
  //   {id:6,email:'minhhieu@gmail.com',fullname:'Nguyễn Minh Hiếu',mobile:'0365498789',date:'2002-09-17',sex:1,area:'Nam',status:1},
  //   {id:7,email:'haiduong@gmail.com',fullname:'Nguyễn Hải Dương',mobile:'0336699887',date:'2002-05-11',sex:1,area:'Bắc',status:0},
  // ];
  constructor(private http: HttpClient) { }

  getMembers() {
    return this.http.get<Member[]>(this.url);
  }

  addMember(data:Member) {
    return this.http.post<Member>(`${this.url}/addmember`, data)
  }

  getMemberById(id:string){
    return this.http.get<Member>(`${this.url}/getOneMember/${id}`)
  }

  updateMember(data:any,id:string) {
    return this.http.patch<Member>(`${this.url}/updatemember/${id}`, data)
  }

  delete(id:string) {
    return this.http.delete<Member>(`${this.url}/delete/${id}`)
  }
}
