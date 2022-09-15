import { DogWalkingBusiness } from "../../src/business/DogWalkingBusiness"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { DogWalkingDatabaseMock } from "../mocks/DogWalkingDatabaseMock"
import { DogWalkingDatabase } from "../../src/database/DogWalkingDatabase"
import { IGetWalkingsByStatusInputDTO, STATUS } from "../../src/models/DogWalking"


describe("Testing DogWalkingBusiness", () =>{
    const dogWalkingBusiness = new DogWalkingBusiness(
        new DogWalkingDatabaseMock() as unknown as DogWalkingDatabase,
        new IdGeneratorMock()
    )

    test("getWalkingsByStatus bem sucedido", async () => {
        const input:IGetWalkingsByStatusInputDTO = {
            search:"Doing"
        }
        const response = await dogWalkingBusiness.getWalkingsByStatus(input)

        
        expect(response.walkings[0].getId()).toEqual("202")
        expect(response.walkings[0].getStatus()).toEqual("Doing")
        expect(response.walkings[0].getSchedule()).toEqual(new Date("2022/09/05")) 
        
    })

})