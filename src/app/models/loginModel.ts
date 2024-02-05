import { ResponceModel } from "./responce/responceModel"

export interface LoginModel extends ResponceModel{
    email : string
    password : string
}