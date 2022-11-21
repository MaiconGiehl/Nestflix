import { ApiProperty } from '@nestjs/swagger';

export default class FavoriteMoviesInput {
  @ApiProperty()
  id?: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  image: string;

  @ApiProperty()
  user_id: number;
}
