import { ApiDataService } from './services/api-data.service';
import { Component,OnDestroy } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title:string='Shashank Varshney'
  users:any=[]
  userCount = 0;
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private apiData:ApiDataService, private spinner:NgxSpinnerService){
  }

  getAllUsers(item:any){
    console.log(item)
    this.users=item
    
    // this.apiData.getApiData().subscribe((res) => {
    //   this.users = res;
    // });

  }
    
  
  getFormData(data:any){
    this.apiData.saveUser(data).subscribe((result)=>{
      if(data!=null){
        this.userCount = this.userCount + 1;
         console.log(result)
      }
      else{
        alert('Please enter the data');
      }
    })
  }


  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
