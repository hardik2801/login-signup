import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { RouterStateParamsService } from 'ng-router-state-params';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  userId; resp; loading;
  name; email;
  constructor(public routerStateParamsService: RouterStateParamsService, private apiService: ApiService, public _router: Router) {

  }

  getUserData(userId) {
    this.apiService.getUser(userId).subscribe((response) => {
      this.resp = response;
    }, (error) => {
      console.log('Error :: ' + error);
    },
      () => {
        this.loading = false;
        const mainScope = this;
        if (!this.resp.status) {
          this._router.navigate(['login/']);
        } else if (this.resp.status) {
          this.name = this.resp.data.name;
        }
      });
  }

  ngOnInit() {
    this.userId = this.routerStateParamsService.getParams().source.value.id;
    this.loading = true;
    this.name = null;
    this.getUserData(this.userId);
  }

}
