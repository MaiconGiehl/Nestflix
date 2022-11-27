import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import FavoriteMoviesEntity from '../models/entities/favoriteMovies.entity';
import FavoriteMoviesConverter from '../models/converters/favoriteMovies.converter';
import FavoriteMoviesOutput from '../models/dto/output/favoriteMovies.output';
import FavoriteMoviesInput from '../models/dto/input/favoriteMovies.input';
import { UsersService } from './users.service';
import UserEntity from '../models/entities/user.entity';

@Injectable()
export class FavoriteMoviesService {
  constructor(
    @InjectRepository(FavoriteMoviesEntity)
    private readonly favoriteMoviesRepo: Repository<FavoriteMoviesEntity>,
    private readonly favoriteMoviesConverter: FavoriteMoviesConverter,
    private readonly usersService: UsersService,
  ) {}

  async findAll(): Promise<FavoriteMoviesOutput[]> {
    const favoriteMoviesEntities = await this.favoriteMoviesRepo.find();

    const outputList: FavoriteMoviesOutput[] = favoriteMoviesEntities.map(
      (entity) => {
        return this.favoriteMoviesConverter.entityToOutput(entity);
      },
    );

    return outputList;
  }

  async findByUser(user_id: number): Promise<FavoriteMoviesOutput[]> {
    const favoriteMoviesEntities: FavoriteMoviesEntity[] =
      await this.favoriteMoviesRepo.find({
        where: { user: { id: user_id } },
      });

    const outputList = favoriteMoviesEntities.map((entity) => {
      return this.favoriteMoviesConverter.entityToOutput(entity);
    });

    return outputList;
  }

  async update(
    id: number,
    input: FavoriteMoviesInput,
  ): Promise<FavoriteMoviesOutput> {
    const favoriteMoviesEntity = await this.favoriteMoviesRepo.findOne({
      where: { id: id },
    });

    const convertedEntity = this.favoriteMoviesConverter.inputToEntity(
      input,
      favoriteMoviesEntity,
    );

    const savedEntity = await this.favoriteMoviesRepo.save(convertedEntity);

    const output = this.favoriteMoviesConverter.entityToOutput(savedEntity);

    return output;
  }

  async findOne(id: number) {
    const favoriteMoviesEntity = await this.favoriteMoviesRepo.findOne({
      where: { id: id },
    });

    const output =
      this.favoriteMoviesConverter.entityToOutput(favoriteMoviesEntity);

    return output;
  }

  async updateName(id: number, name: string) {
    const favoriteMoviesEntity = await this.favoriteMoviesRepo.findOne({
      where: { id },
    });

    favoriteMoviesEntity.title = name;

    const favoriteMoviesSaved = await this.favoriteMoviesRepo.save(
      favoriteMoviesEntity,
    );

    const output =
      this.favoriteMoviesConverter.entityToOutput(favoriteMoviesSaved);

    return output;
  }

  async remove(id: number) {
    const favoriteMoviesEntity: FavoriteMoviesEntity =
      await this.favoriteMoviesRepo.findOne({
        where: { id },
      });

    this.favoriteMoviesRepo.remove(favoriteMoviesEntity);
    return `Movie ${id} successfuly removed`;
  }

  async save(favoriteMovie: FavoriteMoviesInput) {
    const userEntity: UserEntity = await this.usersService.findOneReturnEntity(
      favoriteMovie.user_id,
    );

    const favoriteMoviesEntity =
      await this.favoriteMoviesConverter.inputToEntity(
        favoriteMovie,
        new FavoriteMoviesEntity(),
      );

    favoriteMoviesEntity.user = userEntity;

    const savedEntity = await this.favoriteMoviesRepo.save(
      favoriteMoviesEntity,
    );

    const favoriteMoviesOutput: FavoriteMoviesOutput =
      this.favoriteMoviesConverter.entityToOutput(savedEntity);

    return favoriteMoviesOutput;
  }
}
