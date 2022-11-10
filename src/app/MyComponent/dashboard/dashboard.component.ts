import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiDataService } from 'src/app/services/api-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private apidata:ApiDataService) { }
  userlist:any=[]
  @Input() userCount=0;
  @Output() getUserEvent=new EventEmitter(); 
  @Output() getUser:EventEmitter<any> = new EventEmitter() 
  ngOnInit(): void {
  }

  getAllUsers(){
    this.apidata.getApiData().subscribe((res)=>{
      this.userlist=res;
      // console.log(this.userlist)
      this.getUser.emit(this.userlist)
    })
  }
}
