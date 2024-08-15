import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

     private user = [
        {
            "id" : 1,
            "name" : "mohd imran",
            "email" : "shaikhmiran@gmail.com",
            "role" : "intern"

        },
        {
            "id" : 2,
            "name" : "mohd Kashif",
            "email" : "kashif@gmail.com",
            "role" : "intern"

        },
        {
            "id" : 3,
            "name" : "Fareeha",
            "email" : "fareeha@gmail.com",
            "role" : "intern"

        }
    ]
    findAll(){
        return this.user
    }
    findOne(id:number){
        const user = this.user.filter((user)=> user.id === id)
        return user
    }
    update(id:number, userDetails:{name?:string, email?:string, role?:string}){
        this.user = this.user.map((user)=>{
            if(user.id === id){
                return {...user, ...userDetails}
            }
            return user
        })
        return this.findOne(id)
    }

    createTask(user: {name:string, email:string, role:string}){
        const userById = [...this.user].sort((a,b)=> b.id - a.id)
        const newUser  = {
            id : userById[0].id + 1,
            ...user
        }
        this.user.push(newUser)
        return newUser
    }

    delete(id:number){
        const removeUser = this.findOne(id)
        this.user = this.user.filter(user=> user.id !== id)
        return removeUser
    }





}
