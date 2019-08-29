import { Component, OnInit , Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { TodoService } from '../todo.service';
import { Todo } from './../todo.interface';
import { ToastrService } from 'ngx-toastr';
import {Router} from "@angular/router";

@Component({
  selector: 'app-deletetask',
  templateUrl: './deletetask.component.html',
  styleUrls: ['./deletetask.component.css']
})
export class DeletetaskComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeletetaskComponent>,
    @Inject(MAT_DIALOG_DATA) public passingData: Todo,
    private myData: TodoService,
    private toastr: ToastrService,
    private router : Router
  ) { }

  ngOnInit() {
  }

  onCancel(): void {
    this.dialogRef.close();
  }


   //delete a todo
  deleteItem(_id: string){
    this.myData.deleteTodo(_id)
      .subscribe(
        (res: any) => {
          // this.router.navigate(['task']);
          location.reload();
          // this.toastr.success('', 'Record has been deleted successfully',{
          //   timeOut: 5000   
          // });
        },
        (error: any) => console.log(error)
      )
      this.dialogRef.close();
  }
}
