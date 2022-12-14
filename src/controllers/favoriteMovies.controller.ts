import {
  Controller,
  Get,
  Param,
  Delete,
  Patch,
  Post,
  Query,
  Body,
  Put,
} from '@nestjs/common';
import { ApiTags, ApiCreatedResponse } from '@nestjs/swagger';
import FavoriteMoviesOutput from '../models/dto/output/favoriteMovies.output';
import { FavoriteMoviesService } from '../services/favoriteMovies.service';
import FavoriteMoviesInput from '../models/dto/input/favoriteMovies.input';

@ApiTags('FavoriteMovies')
@Controller('favoriteMovies')
export class FavoriteMoviesController {
  constructor(private readonly favoriteMoviesService: FavoriteMoviesService) {}

  @Get()
  @ApiCreatedResponse({ type: FavoriteMoviesOutput, isArray: true })
  findAll(): Promise<FavoriteMoviesOutput[]> {
    return this.favoriteMoviesService.findAll();
  }

  @Get(':user_id')
  @ApiCreatedResponse({ type: FavoriteMoviesOutput, isArray: true })
  findByUser(
    @Param('user_id') user_id: number,
  ): Promise<FavoriteMoviesOutput[]> {
    return this.favoriteMoviesService.findByUser(user_id);
  }

  @Post()
  save(@Body() input: FavoriteMoviesInput) {
    return this.favoriteMoviesService.save(input);
  }

  @Put(':id')
  @ApiCreatedResponse({ type: FavoriteMoviesOutput })
  update(
    @Param('id') id: string,
    @Body() input: FavoriteMoviesInput,
  ): Promise<FavoriteMoviesOutput> {
    return this.favoriteMoviesService.update(+id, input);
  }

  @Get(':id')
  @ApiCreatedResponse({ type: FavoriteMoviesOutput })
  findOne(@Param('id') id: string) {
    return this.favoriteMoviesService.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: FavoriteMoviesOutput })
  updateName(@Param('id') id: string, @Query('name') name: string) {
    return this.favoriteMoviesService.updateName(+id, name);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.favoriteMoviesService.remove(+id);
  }
}
