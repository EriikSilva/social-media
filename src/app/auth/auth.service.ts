import { Injectable } from "@angular/core";
import {HttpClient } from '@angular/common/http'
import { AuthData } from "./auth-data.model";

@Injectable({
    providedIn:'root'
})
export class AuthService{
    constructor(private http:HttpClient){}

    createUser(username:string, email:string, password:string){
        const AuthData:AuthData = {username:username, email:email, password:password}

        this.http.post("http://localhost:3000/register", AuthData)
        .subscribe((res) => {
            console.log(res)
        })
    }
}       