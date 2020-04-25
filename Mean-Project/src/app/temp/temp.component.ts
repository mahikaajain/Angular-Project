import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { UserLoginService } from '../user-login.service';
import { User } from '../user';


declare var $:any;
@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})

export class TempComponent implements OnInit {
  hide=true;
  credentials:any;
  user: User=new User("","","");
  user1:SocialUser;
  message:any;
  selectedFile=null;
  
  constructor(private authService: AuthService,private service:UserLoginService) 
  {
    let response=this.service.gettingCredentials();
    response.subscribe((data)=>this.credentials=data);
  }
  
  registerProcess(form)
  {
    console.log("hey");
    console.log(form.value);
    let response=this.service.doRegistration(form.value);
    response.subscribe((data)=> this.message = data);
  }

  LoginProcess(form)
    {
      console.log(form);
      let response=this.service.gettingCredentials();
      response.subscribe((data)=> this.credentials = data);
      console.log("login done");
    
    }
    onLogin(form)
    {
      let flag:boolean=true;
      let email:String=form.value.email;
      let password:String= form.value.password;
      console.log(this.credentials);

      for(let i in this.credentials)
      { 
        if(email == this.credentials[i].email && password == this.credentials[i].password && form.valid == true )
        {
          flag=false;
          break;
          // this.router.navigateByUrl('/home');

        }
       
      }

      if(flag==true)
      {
        alert("Invalid Credentials!");
        
      }
    }


  ngOnInit():void
  {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
    
    signUpButton.addEventListener('click', () =>
    container.classList.add('right-panel-active'));
    
    signInButton.addEventListener('click', () =>
    container.classList.remove('right-panel-active'));
    this.authService.authState.subscribe((user1) => {
      this.user1 = user1;
      console.log(user1);
    });
  }


  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(x => console.log(x));
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(x => console.log(x));
  }
  

}
