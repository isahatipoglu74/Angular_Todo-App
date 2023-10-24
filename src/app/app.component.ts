import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  todos:string[]=[]; //dizi oluşturduk
  work: string="";
  updateWork: string= "";
  updateIndex: number =0;
  isUpdate: boolean=false;

  save(){  //save metodu
    this.todos.push(this.work);
    this.work="";

  }

  delete(index:number){
    this.todos.splice(index,1);
  }

  get(work:string, index: number){
    this.updateIndex=index;
    this.updateWork=work;
    this.isUpdate=true;
  }

  cancel(){
    this.updateIndex=0;
    this.updateWork="";
    this.isUpdate=false; 
  }

  update(){
    this.todos[this.updateIndex]=this.updateWork;
    this.cancel();
  }


}
