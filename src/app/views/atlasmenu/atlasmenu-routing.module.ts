import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { BygroupComponent } from './bygroup/bygroup.component';
import { ByresponsibleComponent } from './byresponsible/byresponsible.component';
import { PhonenumberComponent } from './phonenumber/phonenumber.component';
import { ApidocumentComponent } from './apidocument/apidocument.component';
import { AdminstrationComponent } from './adminstration/adminstration.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { AddemployeeComponent } from "./addemployee/addemployee.component";



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Admin Panel'
    },
    children: [
      {
        path: '',
        redirectTo: 'overview'
      },
      {
        path: 'overview',
        component: OverviewComponent,
        data: {
          title: 'Overview'
        }
      },
      {
        path: 'Bygroup',
        component: BygroupComponent,
        data: {
          title: 'Bygroup'
        }
      },
      {
        path: 'Byresponsible',
        component: ByresponsibleComponent,
        data: {
          title: 'Byresponsible'
        }
      },
      {
        path: 'Phonenumber',
        component: PhonenumberComponent,
        data: {
          title: 'Phonenumber'
        }
      },
      {
        path: 'Apidocument',
        component: ApidocumentComponent,
        data: {
          title: 'Apidocument'
        }
      },
      {
        path: 'Adminstration',
        component: AdminstrationComponent,
        data: {
          title: 'Adminstration'
        }
      },
      {
        path: 'editemployee',
        component: EditemployeeComponent,
        data: {
          title: 'editemployee'
        }
      },
      {
        path: 'addemployee',
        component: AddemployeeComponent,
        data: {
          title: 'Addemployee'
        }
      },
     
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtlastmenuRoutingModule {}
