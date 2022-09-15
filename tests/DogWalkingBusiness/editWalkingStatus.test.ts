import { DogWalkingBusiness } from "../../src/business/DogWalkingBusiness"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { DogWalkingDatabaseMock } from "../mocks/DogWalkingDatabaseMock"
import { DogWalkingDatabase } from "../../src/database/DogWalkingDatabase"
import { IEditWalkingStatusInputDTO, IGetAllWalkingsByDateInputDTO, STATUS } from "../../src/models/DogWalking"
import { BaseError } from "../../src/errors/BaseError"


describe("Testing DogWalkingBusiness", () =>{
    const dogWalkingBusiness = new DogWalkingBusiness(
        new DogWalkingDatabaseMock() as unknown as DogWalkingDatabase,
        new IdGeneratorMock()
    )

    test("editWalkingStatus bem sucedido", async () => {
        const input:IEditWalkingStatusInputDTO ={
            id:"201",
            status:STATUS.DOING
        }
        const response = await dogWalkingBusiness.editWalkingStatus(input)

        expect(response.message).toEqual(`Status do passeio ${input.id} alterado para '${input.status}' com sucesso!`)
        
    })

    test("deve retornar erro se houver campos em branco", async () => {
        try {
            const input:IEditWalkingStatusInputDTO ={
                id:"201",
                status:undefined
            }

            await dogWalkingBusiness.editWalkingStatus(input)

            
        } catch (error:unknown) {
            if(error instanceof BaseError){
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Erro: há campos em branco! Por favor, confira seus inputs.")
            
        }
      
    }
        
    })

    test("deve retornar erro se passeio não existir", async () => {
        try {
            const input:IEditWalkingStatusInputDTO ={
                id:"id-mock",
                status:STATUS.DOING
            }

            await dogWalkingBusiness.editWalkingStatus(input)

            
        } catch (error:unknown) {
            if(error instanceof BaseError){
                expect(error.statusCode).toEqual(404)
                expect(error.message).toEqual("Erro: passeio não encontrado!")
            
        }
      
    }
        
    })

    test("deve retornar erro se status for 'done'", async () => {
        try {
            const input:IEditWalkingStatusInputDTO ={
                id:"203",
                status:STATUS.DOING
            }

            await dogWalkingBusiness.editWalkingStatus(input)

            
        } catch (error:unknown) {
            if(error instanceof BaseError){
                expect(error.statusCode).toEqual(401)
                expect(error.message).toEqual("Erro: Não é possível alterar o status de passeio concluído!")
            
        }      
    }
        
    })

})