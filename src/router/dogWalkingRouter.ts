import { Router } from 'express'
import { DogWalkingBusiness } from '../business/DogWalkingBusiness'
import { DogWalkingController } from '../controller/DogWalkingController'
import { DogWalkingDatabase } from '../database/DogWalkingDatabase'
import { IdGenerator } from '../services/IdGenerator'

export const dogWalkingRouter = Router()

const dogWalkingController = new DogWalkingController(
    new DogWalkingBusiness(
        new DogWalkingDatabase,
        new IdGenerator()
    )
)

dogWalkingRouter.get("/", dogWalkingController.getAllWalkings)
dogWalkingRouter.get("/:search", dogWalkingController.getWalkingsByStatus)
dogWalkingRouter.get("/search/:date", dogWalkingController.getWalkingsByDate)
dogWalkingRouter.post("/create", dogWalkingController.createWalk)
dogWalkingRouter.put("/edit/:id", dogWalkingController.editWalkingStatus)
