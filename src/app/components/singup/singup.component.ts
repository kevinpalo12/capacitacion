import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {

  user: string;
  password: string;
  constructor(private authService: AuthService) {
    this.user = ""
    this.password = ""
  }

  ngOnInit(): void {
  }

  register() {
    this.authService.singUp(this.user, this.password).subscribe(
      (res: any) => {
        if (res['created'] = 1) {

        }
      }
    )
  }

}
