import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ProyectoCiclo4DataSource} from '../datasources';
import {Cliente, ClienteRelations} from '../models';

export class ClienteRepository extends DefaultCrudRepository<
  Cliente,
  typeof Cliente.prototype.id,
  ClienteRelations
> {
  constructor(
    @inject('datasources.proyectoCiclo4') dataSource: ProyectoCiclo4DataSource,
  ) {
    super(Cliente, dataSource);
  }
}
