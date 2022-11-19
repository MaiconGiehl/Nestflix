import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import FavoriteMoviesEntity from '../models/entities/favoriteMovies.entity';
import { FavoriteMoviesController } from '../controllers/favoriteMovies.controller';
import { FavoriteMoviesService } from '../services/favoriteMovies.service';
import FavoriteMoviesConverter from '../models/converters/favoriteMovies.converter';

@Module({
  imports: [TypeOrmModule.forFeature([FavoriteMoviesEntity])],
  controllers: [FavoriteMoviesController],
  providers: [FavoriteMoviesService, FavoriteMoviesConverter],
})
export class FavoriteMoviesModule {}
