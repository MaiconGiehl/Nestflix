import { ApiProperty } from '@nestjs/swagger';

export default class FavoriteMoviesOutput {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  image: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  user_id: number;
}
