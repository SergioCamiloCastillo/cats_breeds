import axios from 'axios';
import {BreedEntity} from '../../domain/entities/breed_entity';

const API_URL = 'https://api.thecatapi.com/v1/breeds';
const API_KEY =
  'XXXXX';
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
