
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {AuthGuard} from "../../controller/guards/auth.guard";
import {FormationAddComponent} from "./view/formation-admin/formation-add/formation-add.component";
import {CongresAddComponent} from "./view/congres-admin/congres-add/congres-add.component";
import {ProduitBioAddComponent} from "./view/produit-bio-admin/produit-bio-add/produit-bio-add.component";
import {UserAdminComponent} from "./view/user-admin/user-admin.component";
import {GerantAdminComponent} from "./view/gerant-admin/gerant-admin.component";
import {CommandeAdminComponent} from "./view/commande-admin/commande-admin.component";
import {ProduitBioAdminComponent} from "./view/produit-bio-admin/produit-bio-admin.component";
import {CongresAdminComponent} from "./view/congres-admin/congres-admin.component";
import {FormationAdminComponent} from "./view/formation-admin/formation-admin.component";

@NgModule({
    imports: [
        RouterModule.forChild(
            [
                { path: 'formation', component: FormationAdminComponent, canActivate: [AuthGuard] },
                { path: 'congres', component: CongresAdminComponent, canActivate: [AuthGuard] },
                { path: 'produit-bio', component:ProduitBioAdminComponent, canActivate: [AuthGuard] },
                { path: 'user', component: UserAdminComponent, canActivate: [AuthGuard] },
                { path: 'gerant', component: GerantAdminComponent, canActivate: [AuthGuard] },
                { path: 'commande', component: CommandeAdminComponent, canActivate: [AuthGuard] },
/*
                 Apres pour ajouter un admin
                { path: 'admin', component: , canActivate: [AuthGuard] },
*/
            ]
        ),
    ],
    exports: [RouterModule],
})
export class AdminRoutingModule { }
