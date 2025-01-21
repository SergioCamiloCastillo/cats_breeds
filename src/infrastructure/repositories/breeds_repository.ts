import {BreedEntity} from '../../domain/entities/breed_entity';
import {BreedsApiDataSource} from '../datasources/breeds_api_datasource';

export class BreedsRepository {
  private api: BreedsApiDataSource;
  constructor() {
    this.api = new BreedsApiDataSource();
  }
  async getBreeds(): Promise<BreedEntity[]> {
    return await this.api.getBreedsFromApi();
  }
}
