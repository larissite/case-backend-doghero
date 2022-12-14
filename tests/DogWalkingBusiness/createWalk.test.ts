import { DogWalkingBusiness } from "../../src/business/DogWalkingBusiness";
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock";
import { DogWalkingDatabaseMock } from "../mocks/DogWalkingDatabaseMock";
import { DogWalkingDatabase } from "../../src/database/DogWalkingDatabase";
import { ICreateWalkInputDTO } from "../../src/models/DogWalking";
import { BaseError } from "../../src/errors/BaseError";

describe("Testing DogWalkingBusiness", () =>{
    const dogWalkingBusiness = new DogWalkingBusiness(
        new DogWalkingDatabaseMock() as unknown as DogWalkingDatabase,
        new IdGeneratorMock()
    )

    test("createWalk bem sucedido", async () => {
        const input:ICreateWalkInputDTO={
            schedule: new Date("2022-09-09"),
            duration:"60",
            latitude: "13.78",
            longitude: "14.7",
            pets:1,
            start_walking:"14:00",
            finish_walking:"15:00"       
        }

        const response = await dogWalkingBusiness.createWalk(input)

        expect(response.message).toEqual("Passeio criado com sucesso!")
        expect(response.newDog_Walking.getId()).toEqual("id-mock")
        expect(response.newDog_Walking.getSchedule()).toEqual(new Date("2022-09-09"))
        expect(response.newDog_Walking.getDuration()).toEqual("60")
        expect(response.newDog_Walking.getPrice()).toEqual(35)
        
    })

    test("deve retornar erro se houver campos em branco", async () => {
        expect.assertions(2)

        try {

            const input:ICreateWalkInputDTO={
                schedule: undefined,
                duration:"60",
                latitude: "13.78",
                longitude: "14.7",
                pets:1,
                start_walking:"14:00",
                finish_walking:"15:00"       
            }
    
            await dogWalkingBusiness.createWalk(input)    
            
        } catch (error:unknown) {
            if(error instanceof BaseError){
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Erro: h?? campos em branco! Por favor, confira seus inputs.")
        }
    }  
        
    })

    test("deve retornar erro se n??mero de pets for zero", async () => {
        expect.assertions(2)

        try {

            const input:ICreateWalkInputDTO={
                schedule: new Date("2022-09-09"),
                duration:"60",
                latitude: "13.78",
                longitude: "14.7",
                pets: 0,
                start_walking:"14:00",
                finish_walking:"15:00"       
            }
    
            await dogWalkingBusiness.createWalk(input)    
            
        } catch (error:unknown) {
            if(error instanceof BaseError){
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Erro: n??mero de pets deve ser maior que zero.")
        }
    }  
        
    })

    test("deve retornar erro se for agendando em dia anterior ao atual", async () => {
        expect.assertions(2)

        try {

            const input:ICreateWalkInputDTO={
                schedule: new Date("2022-09-05"),
                duration:"60",
                latitude: "13.78",
                longitude: "14.7",
                pets: 1,
                start_walking:"14:00",
                finish_walking:"15:00"       
            }
    
            await dogWalkingBusiness.createWalk(input)    
            
        } catch (error:unknown) {
            if(error instanceof BaseError){
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Erro: n??o ?? poss??vel agendar passeios em dia anterior ao atual.")
        }
    }  
        
    })

    test("deve retornar erro se dura????o do passeio n??o coincidir com hor??rios informados - 30min", async () => {
        expect.assertions(2)

        try {

            const input:ICreateWalkInputDTO={
                schedule: new Date("2022-09-09"),
                duration:"30",
                latitude: "13.78",
                longitude: "14.7",
                pets: 1,
                start_walking:"14:00",
                finish_walking:"15:00"       
            }
    
            await dogWalkingBusiness.createWalk(input)    
            
        } catch (error:unknown) {
            if(error instanceof BaseError){
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Erro: confira a dura????o do passeio!")
        }
    }  
    })

    test("deve retornar erro se dura????o do passeio n??o coincidir com hor??rios informados - 60min", async () => {
        expect.assertions(2)

        try {

            const input:ICreateWalkInputDTO={
                schedule: new Date("2022-09-09"),
                duration:"60",
                latitude: "13.78",
                longitude: "14.7",
                pets: 1,
                start_walking:"14:00",
                finish_walking:"14:30"       
            }
    
            await dogWalkingBusiness.createWalk(input)    
            
        } catch (error:unknown) {
            if(error instanceof BaseError){
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Erro: confira a dura????o do passeio!")
        }
    }  
    })

    test("deve retornar erro se dura????o do passeio n??o for de 30 ou 60 min", async () => {
        expect.assertions(2)

        try {

            const input:ICreateWalkInputDTO={
                schedule: new Date("2022-09-09"),
                duration:"30",
                latitude: "13.78",
                longitude: "14.7",
                pets: 1,
                start_walking:"14:00",
                finish_walking:"16:00"       
            }
    
            await dogWalkingBusiness.createWalk(input)    
            
        } catch (error:unknown) {
            if(error instanceof BaseError){
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Erro: confira a dura????o do passeio!")
        }
    }  
    })


    
})

