import { DogWalking, IDogWalkingDB, STATUS } from "../models/DogWalking";
import { BaseDatabase } from "./BaseDatabase";

export class DogWalkingDatabase extends BaseDatabase{
    public static TABLE_DOGWALKING = "Dog_Walking"

    public getAllWalkings = async () => {
        const walkingsDB:IDogWalkingDB[] = await BaseDatabase
        .connection(DogWalkingDatabase.TABLE_DOGWALKING)
        .select()
        
        return walkingsDB
        
    }

    public getWalkingsByStatus = async (search:string) => {
        const result = await BaseDatabase
        .connection(DogWalkingDatabase.TABLE_DOGWALKING)
        .select()
        .where("status", "LIKE", `%${search}%`)
        .orderBy("schedule")

        return result
    }
    

    public getWalkingsByDate = async (search:string) => {
       const result = await BaseDatabase
       .connection(DogWalkingDatabase.TABLE_DOGWALKING)
       .select()
       .where("schedule",">=", `${search}`)
       .orderBy("schedule")
       return result
    }
    


    public createWalk = async (input: DogWalking) => {
     const dogWalkingDB: IDogWalkingDB = {
         id: input.getId(),
         status:input.getStatus(),
         schedule:input.getSchedule(),
         price:input.getPrice(),
         duration:input.getDuration(),
         latitude:input.getLatitude(),
         longitude:input.getLongitude(),
         pets:input.getPets(),
         start_walking:input.getStart_Walking(),
         finish_walking:input.getFinish_Walking()
     }

      await BaseDatabase
     .connection(DogWalkingDatabase.TABLE_DOGWALKING)
     .insert(dogWalkingDB)
}

    public getWalkingById = async (id:string) => {
        const result = await BaseDatabase
        .connection(DogWalkingDatabase.TABLE_DOGWALKING)
        .select()
        .where({id:id})

        return result[0]
    }


    public editWalkingStatus =async (id:string, status:string) => {
        const result = await BaseDatabase
        .connection(DogWalkingDatabase.TABLE_DOGWALKING)
        .select()
        .where({id: id})
        .update({status: status})

        return result
    
    }


}