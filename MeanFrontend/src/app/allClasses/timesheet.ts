import { NgbDate } from "@ng-bootstrap/ng-bootstrap";

export class Timesheet {
    public _id!:string;
    public name:string | undefined;
    public entryDate:string | undefined;
    public taskDate:string | undefined;
    public project:string | undefined;
    public task:string | undefined;
    public description:string | undefined;
    public hoursInvested:string | undefined

}
