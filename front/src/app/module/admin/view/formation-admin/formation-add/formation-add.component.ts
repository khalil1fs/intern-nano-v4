import { Component, OnInit } from '@angular/core';
import {FormationService} from "../../../../../controller/service/Formation.service";
import {Formation} from "../../../../../controller/model/formation.model";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProduitBio} from "../../../../../controller/model/produit-bio.model";
import {AuthService} from "../../../../../controller/service/Auth.service";
import {RoleService} from "../../../../../controller/service/role.service";

@Component({
  selector: 'app-formation-add',
  // template: '<br><br><br><br><br><br><br><br><br><br><br><input type="text" [(ngModel)]="test"> <h1>{{test}}</h1>',
  templateUrl: './formation-add.component.html',
  styleUrls: ['./formation-add.component.css']
})
export class FormationAddComponent implements OnInit {
  test: any;


  title : any;
  public error: string = null;

  constructor(private formationService: FormationService, private router: Router
              , private authService :AuthService , private roleService: RoleService) { }

  ngOnInit(): void {
  }

  logOut() {
    this.authService.logout();
    console.log("Log Out Succesfully");

  }


  public async submit() {
    // const isPermistted = await this.roleService.isPermitted('Formation', 'add');
    // if(isPermistted) {
      this.formationService.save().subscribe(data => {
        console.log(data);
        // this.formations.push({...data});
        this.selectedFormation = new Formation();
        // this.router.navigate(['/login']);
      }, (error: HttpErrorResponse) => {
        this.error = error.error;
        console.log(error);
      });
    // }else {
    //   console.log('vous n\' etes pas autorise');
    // }
  }

  /*  Getters and Setters  */
  focus: boolean;
  get selectedFormation(): Formation{
    return this.formationService.selectedformation;
  }
  set selectedFormation(value: Formation) {
    this.formationService.selectedformation = value;
  }
  get formations(): Array<Formation>{
    return this.formationService.formations;
  }

  get selectedProduitBio(): ProduitBio {
   return  this.formationService.selectedProduitBio;
  }

  set selectedProduitBio(value: ProduitBio) {
    this.formationService.selectedProduitBio = value;
  }

}
