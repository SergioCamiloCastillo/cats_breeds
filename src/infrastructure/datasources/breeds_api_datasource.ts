import axios from 'axios';
import {BreedEntity} from '../../domain/entities/breed_entity';
import {API_URL, API_KEY} from '@env';
export class BreedsApiDataSource {
  async getBreedsFromApi(): Promise<BreedEntity[]> {
    const response = await axios.get(API_URL, {
      headers: {
        'x-api-key': API_KEY,
      },
    });
    return response.data;
  }
}
