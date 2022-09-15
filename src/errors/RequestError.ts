import { BaseError } from "./BaseError";

export class RequestError extends BaseError{
    constructor(
        message:string =  "Requisição Inválida"
    ){
        super(400, message)
    }
}