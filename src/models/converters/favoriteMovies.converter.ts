import { Injectable } from '@nestjs/common';

import FavoriteMoviesEntity from '../entities/favoriteMovies.entity';
import FavoriteMoviesOutput from '../dto/output/favoriteMovies.output';
import FavoriteMoviesInput from '../dto/input/favoriteMovies.input';

@Injectable()
export default class FavoriteMoviesConverter {
  inputToEntity(input: FavoriteMoviesInput, entity: FavoriteMoviesEntity) {
    entity.id = input.id;
    entity.title = input.title;
    entity.image = input.image;
    entity.createdAt = new Date();
    entity.updatedAt = new Date();
    entity.user_id = input.user_id;

    return entity;
  }

  entityToOutput(entity: FavoriteMoviesEntity): FavoriteMoviesOutput {
    const output = new FavoriteMoviesOutput();

    output.id = entity.id;
    output.title = entity.title;
    output.createdAt = entity.createdAt;
    output.updatedAt = entity.updatedAt;
    output.user_id = entity.user_id;

    return output;
  }
}

//output = DTO
