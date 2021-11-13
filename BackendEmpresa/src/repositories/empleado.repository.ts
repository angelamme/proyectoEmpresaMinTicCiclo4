import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ProyectoCiclo4DataSource} from '../datasources';
import {Empleado, EmpleadoRelations} from '../models';

export class EmpleadoRepository extends DefaultCrudRepository<
  Empleado,
  typeof Empleado.prototype.id,
  EmpleadoRelations
> {
  constructor(
    @inject('datasources.proyectoCiclo4') dataSource: ProyectoCiclo4DataSource,
  ) {
    super(Empleado, dataSource);
  }
}
