import { Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor (private readonly usersService: UsersService){}
    @Get() // Get /All users
    findAll(){
        return this.usersService.findAll()
    }
    @Get(':id') // Get / Find selected Users
    findOne(@Param('id') id:string){
        return this.usersService.findOne(+id)
    }
    @Post() //Post /Create a new record
    createTask(@Body() user:{name:string, email:string, role:string}){
        return this.usersService.createTask(user)
    }

    @Patch(':id') // Patch / Update a new record
    update(@Param('id') id : string, @Body() userDetails: {name? : string, email? : string, role?:string}){
        return this.usersService.update(+id,userDetails)
    }

    @Delete(':id') // Delete /Delete a record
    delete(@Param('id') id:string){
        return this.usersService.delete(+id)
    }
   
}
