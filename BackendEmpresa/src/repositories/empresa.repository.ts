import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ProyectoEmpresaDataSource} from '../datasources';
import {Empresa, EmpresaRelations} from '../models';

export class EmpresaRepository extends DefaultCrudRepository<
  Empresa,
  typeof Empresa.prototype.id,
  EmpresaRelations
> {
  constructor(
    @inject('datasources.proyectoEmpresa') dataSource: ProyectoEmpresaDataSource,
  ) {
    super(Empresa, dataSource);
  }
}
