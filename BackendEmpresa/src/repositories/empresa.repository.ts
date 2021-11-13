import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ProyectoCiclo4DataSource} from '../datasources';
import {Empresa, EmpresaRelations} from '../models';

export class EmpresaRepository extends DefaultCrudRepository<
  Empresa,
  typeof Empresa.prototype.id,
  EmpresaRelations
> {
  constructor(
    @inject('datasources.proyectoCiclo4') dataSource: ProyectoCiclo4DataSource,
  ) {
    super(Empresa, dataSource);
  }
}
