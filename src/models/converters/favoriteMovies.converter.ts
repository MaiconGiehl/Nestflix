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

    return entity;
  }

  entityToOutput(entity: FavoriteMoviesEntity): FavoriteMoviesOutput {
    const output = new FavoriteMoviesOutput();

    output.id = entity.id;
    output.title = entity.title;
    output.image = entity.image;
    output.createdAt = entity.createdAt;
    output.updatedAt = entity.updatedAt;

    if (output.user) {
      output.user = {
        id: entity.user.id,
        name: entity.user.name,
        active: entity.user.active,
        createdAt: entity.user.createdAt,
        updatedAt: entity.user.updatedAt,
      };
    }

    return output;
  }
}
