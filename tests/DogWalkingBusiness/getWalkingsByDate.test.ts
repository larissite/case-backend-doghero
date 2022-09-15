import { DogWalkingBusiness } from "../../src/business/DogWalkingBusiness"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { DogWalkingDatabaseMock } from "../mocks/DogWalkingDatabaseMock"
import { DogWalkingDatabase } from "../../src/database/DogWalkingDatabase"
import { IGetAllWalkingsByDateInputDTO } from "../../src/models/DogWalking"


describe("Testing DogWalkingBusiness", () =>{
    const dogWalkingBusiness = new DogWalkingBusiness(
        new DogWalkingDatabaseMock() as unknown as DogWalkingDatabase,
        new IdGeneratorMock()
    )

    test("getWalkingsByDate bem sucedido", async () => {
        const input:IGetAllWalkingsByDateInputDTO ={
            search:"2022-09-05"
        }
        const response = await dogWalkingBusiness.getWalkingsbyDate(input)

        expect(response.walkings.length).toEqual(2)
        expect(response.walkings[0].getId()).toEqual("202")
        expect(response.walkings[1].getId()).toEqual("201")
        expect(response.walkings[0].getSchedule()).toEqual(new Date("2022/09/05")) 
        
    })

    // test("erro se data não for informada corretamente", async () => {
    // expect.assertions(2)
    // try {
    //     const input:IGetAllWalkingsByDateInputDTO ={
    //         search:"2022-"
    //     }
        
    //     await dogWalkingBusiness.getWalkingsbyDate(input)

    // } catch (error:unknown) {
    //     if(error instanceof BaseError){
    //         expect(error.statusCode).toEqual(500)
    //         expect(error.message).toEqual("Erro inesperado ao buscar 'walkings' por data!")
    //     }
    // }
    // })
    
    
})