import { ResponseModel } from "./responce/responseModel"

export interface LoginModel extends ResponseModel{
    email : string
    password : string
}