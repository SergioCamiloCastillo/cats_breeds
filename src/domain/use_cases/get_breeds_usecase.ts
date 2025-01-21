import {BreedsRepository} from '../../infrastructure/repositories/breeds_repository';
export class GetBreedsUseCase {
  constructor(private breedsRepository: BreedsRepository) {}
  async execute() {
    return await this.breedsRepository.getBreeds();
  }
}
