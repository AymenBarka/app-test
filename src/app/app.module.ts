import { JSONPlaceholderService } from './services/jsonplaceholder.service';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import {ReactiveFormsModule,FormsModule} from '@angular/forms'
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {MatDialogModule,MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ListPostsComponent } from './list-posts/list-posts.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { AddPostComponent } from './add-post/add-post.component';









@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    HomeComponent,
    ListPostsComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDialogModule,
    MatToolbarModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger', 
    }),
    MatButtonModule

  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],

  providers: [JSONPlaceholderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
