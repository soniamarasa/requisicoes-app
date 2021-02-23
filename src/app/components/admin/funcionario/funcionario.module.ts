import { NgModule } from '@angular/core';
import { ComumModule } from 'src/app/modules/comum.module';
import { FuncionarioRoutingModule } from './funcionario-routing.module';
import { FuncionarioComponent } from './funcionario.component';
import { FilterDepartamentoPipe } from './../../../pipes/filter-departamento.pipe';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [FuncionarioComponent, FilterDepartamentoPipe],
  imports: [
    ComumModule,
    NgSelectModule,
    FuncionarioRoutingModule
  ]
})
export class FuncionarioModule { }