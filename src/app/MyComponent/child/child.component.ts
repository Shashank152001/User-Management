import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { ApiDataService } from 'src/app/services/api-data.service';
import { Router,RouterModule } from '@angular/router';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  userList:any=[]
  userCount=0;
  @Input() users!:any[];
  // @Output() getuserCount:EventEmitter<number>=new EventEmitter()
  constructor(private apidata:ApiDataService) {
    this.apidata.getApiData().subscribe((res)=>{
      this.userList=res
    })
   }

  ngOnInit(): void {
    
  }
  // deleteUser(id:string){
  //   this.apidata.deleteUsers(id).subscribe((res)=>{
  //     this.userCount=this.userCount-1;
  //     console.log(res)
      
  //   });
  // }
  
}
