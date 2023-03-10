import { User } from '@libs/db/models/user.model';
import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';
import { ApiTags } from '@nestjs/swagger';

@Crud({model:User})
@Controller('users')
@ApiTags('User')
export class UsersController {
    constructor(@InjectModel(User) private readonly model){}
}
