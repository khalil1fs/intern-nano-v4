import { Component, OnInit } from '@angular/core';
import {FormationService} from "../../../../../controller/service/Formation.service";
import {Router} from "@angular/router";
import {Formation} from "../../../../../controller/model/formation.model";

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css']
})
export class FormationListComponent implements OnInit {
  private _formations : Array<Formation>;
  private _selectedFormation: Formation;

  constructor(private formationService: FormationService , private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  public findAll(){
    this.formationService.findAll().subscribe(data =>{
      this.formations = data;
      console.log(data);
    })
  }


  add() {
    this.router.navigate(['/admin/formation-add'])
  }

    edit(formation: Formation) {
      this.formationService.selectedformation = formation;
      this.router.navigate(['/admin/formation-edit'])
        // this.formationService.edit().subscribe( data => {
        //     formation = this.selectedFormation;
        //
        // })
    }

  delete(formation: Formation) {
        this.formationService.delete(formation.nom).subscribe(
            data=>{
              console.log(data);
              this.findAll();
              console.log('deleted successfully');
            }
        )
  }


    get formations(): Array<Formation> {
        return this.formationService.formations;
    }

    set formations(value: Array<Formation>) {
        this.formationService.formations = value;
    }


    get selectedFormation(): Formation {
        return this.formationService.selectedformation;
    }

    set selectedFormation(value: Formation) {
        this.formationService.selectedformation = value;
    }
}
