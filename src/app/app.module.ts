import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { TasksComponent } from './tasks/tasks.component';
import { AddtaskComponent } from './addtask/addtask.component';

//material design modules
import {MatToolbarModule,MatMenuModule, MatButtonModule, MatIconModule, MatListModule, MatDialogModule, MatInputModule } from '@angular/material';
//Angular material ngx-toaster design modules
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {FormsModule} from '@angular/forms';

//injectour service
import { TodoService } from './todo.service';
import { from } from 'rxjs';
import { EdittaskComponent } from './edittask/edittask.component';
import { DeletetaskComponent } from './deletetask/deletetask.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    TasksComponent,
    AddtaskComponent,
    EdittaskComponent,
    DeletetaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    MatMenuModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  entryComponents: [AddtaskComponent, EdittaskComponent,DeletetaskComponent],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
