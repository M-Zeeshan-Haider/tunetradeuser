import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth-service/auth.service';
import { LoginRequest } from 'src/app/shared/models';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginObj: any = {};
  email: any;
  constructor( private router: Router, private authservice: AuthService) { }

  ngOnInit() {
  }

  login(data) {
    console.log('in login in login component result: ' + data);
    const loginData: LoginRequest = data;
    this.authservice.login(this.loginObj).subscribe(
      res => {
        if (res.status === true) {
          this.router.navigate(['/user']);
          sessionStorage.setItem('authToken', res.token);
          // tslint:disable-next-line:prefer-for-of
          for (let index = 0; index < res.data.length; index++) {
            this.email = res.data[index].userEmail;

          }
          localStorage.setItem('setemail', this.email);
        }
      }
    );
  }
}
