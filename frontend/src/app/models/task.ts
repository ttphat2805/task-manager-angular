import { Member } from "./member";
import { Project } from "./project";

export interface Task {
    _id:string;
    name:string;
    description:string;
    priority:number;
    status:number;
    projectId:Project;
    memberId:Member;
}
