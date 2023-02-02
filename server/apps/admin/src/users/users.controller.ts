import { User } from '@libs/db/models/user.model';
import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';

@Crud({model:User})
@Controller('users')
export class UsersController {
    constructor(@InjectModel(User) private readonly model){}
}
