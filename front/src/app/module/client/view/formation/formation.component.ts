import {Component, OnInit} from '@angular/core';
import {FormationService} from "../../../../controller/service/Formation.service";
import {Formation} from "../../../../controller/model/formation.model";
import {Router} from "@angular/router";
import {UserService} from "../../../../controller/service/User.service";
import {User} from "../../../../controller/model/User.model";
import {AuthService} from "../../../../controller/service/Auth.service";

@Component({
    selector: 'app-formation',
    templateUrl: './formation.component.html',
    styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
     formations: Formation[] = [];
     user = new User();


    constructor(private formationService: FormationService, private userService: UserService,
                private router: Router , private authService: AuthService) {
    }

    ngOnInit(): void {
        this.findAll();
        this.online();
    }

    public findAll() {
        this.formationService.findAll().subscribe(
            data => {
                this.formations = data;
            },error => console.log(error)
        );
    }

    online(){
        // this.authService.authenticatedUser = this.user; mafhemtch had lhza9
        console.log('auth user : '+this.authService.authenticatedUser)
        // console.log(' ser : '+this.user)

    }



    //
    // get formations(): Array<Formation> {
    //     return this.formationService.formations;
    // }
    //
    // set formations(value: Array<Formation>) {
    //     this.formationService.formations = value;
    // }

    check() {
        this.router.navigate(['/client/chekout']);
    }
}
