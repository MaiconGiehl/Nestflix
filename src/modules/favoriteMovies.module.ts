import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import FavoriteMoviesEntity from '../models/entities/favoriteMovies.entity';
import { FavoriteMoviesController } from '../controllers/favoriteMovies.controller';
import { FavoriteMoviesService } from '../services/favoriteMovies.service';
import FavoriteMoviesConverter from '../models/converters/favoriteMovies.converter';
import { UsersService } from '../services/users.service';
import UserEntity from '../models/entities/user.entity';
import UsersConverter from '../models/converters/users.converter';

@Module({
  imports: [TypeOrmModule.forFeature([FavoriteMoviesEntity, UserEntity])],
  controllers: [FavoriteMoviesController],
  providers: [
    FavoriteMoviesService,
    FavoriteMoviesConverter,
    UsersService,
    UsersConverter,
  ],
})
export class FavoriteMoviesModule {}
