import { DogWalkingBusiness } from "../../src/business/DogWalkingBusiness";
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock";
import { DogWalkingDatabaseMock } from "../mocks/DogWalkingDatabaseMock";
import { DogWalkingDatabase } from "../../src/database/DogWalkingDatabase";

describe("Testing DogWalkingBusiness", () =>{
    const dogWalkingBusiness = new DogWalkingBusiness(
        new DogWalkingDatabaseMock() as unknown as DogWalkingDatabase,
        new IdGeneratorMock()
    )

    test("getAllWalkings bem sucedido", async () => {
        const response = await dogWalkingBusiness.getWalkings()

        expect(response.walkings.length).toEqual(3)
        expect(response.walkings[0].getId()).toEqual("201")
        expect(response.walkings[1].getId()).toEqual("202")
        expect(response.walkings[0].getSchedule()).toEqual(new Date("2022/09/07"))
    })
    
})