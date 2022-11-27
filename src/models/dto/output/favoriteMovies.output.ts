import { ApiProperty } from '@nestjs/swagger';
import UsersOutput from './users.output';

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
  user: UsersOutput;
  output: {
    name: string;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
  };
}
