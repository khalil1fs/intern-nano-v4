import { Component, OnInit } from '@angular/core';
import {MaterielBioService} from "../../../controller/service/Materiel-bio.service";
import {ProduitBio} from "../../../controller/model/produit-bio.model";

@Component({
  selector: 'app-visiteur-produi-bio',
  templateUrl: './visiteur-produi-bio.component.html',
  styleUrls: ['./visiteur-produi-bio.component.css']
})
export class VisiteurProduiBioComponent implements OnInit {
  // produitBios: ProduitBio[];

  constructor(private materielBioService: MaterielBioService) {
  }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.materielBioService.findAll().subscribe(  data => {
      this.produitBios = data;
      console.log(data);
    },error => {
      console.log(error);
    });
  }

  get produitBios(): Array<ProduitBio>{
    return this.materielBioService.produitBios;
  }

  set produitBios(value: Array<ProduitBio>){
    this.materielBioService.produitBios = value;
  }

}