import { DogWalkingDatabase } from "../database/DogWalkingDatabase";
import { NotFoundError } from "../errors/NotFoundError";
import { RequestError } from "../errors/RequestError";
import { UnauthorizedError } from "../errors/UnauthorizedError";
import { DogWalking, ICreateWalkInputDTO, IEditWalkingStatusInputDTO, IEditWalkingStatusOutputDTO, IGetAllWalkingsByDateInputDTO, IGetAllWalkingsOutputDTO, IGetWalkingsByStatusInputDTO, STATUS } from "../models/DogWalking";
import { IdGenerator } from "../services/IdGenerator";

export class DogWalkingBusiness{
    constructor(
        private dogWalkingDatabase: DogWalkingDatabase,
        private idGenerator: IdGenerator,
    ){}

    public getWalkings = async () => {
        const walkingsDB = await this.dogWalkingDatabase.getAllWalkings()

        const walkings = walkingsDB.map(walkingDB =>{
            return new DogWalking(
                walkingDB.id,
                walkingDB.status,
                walkingDB.schedule,
                walkingDB.price,
                walkingDB.duration,
                walkingDB.latitude,
                walkingDB.longitude,
                walkingDB.pets,
                walkingDB.start_walking,
                walkingDB.finish_walking
            )
        })

        const response:IGetAllWalkingsOutputDTO ={
            walkings
        }
        return response
    }

    public getWalkingsByStatus = async (input:IGetWalkingsByStatusInputDTO) => {
        const search = input.search

        const walkingsDB = await this.dogWalkingDatabase.getWalkingsByStatus(search)

        const walkings = walkingsDB?.map(walkingDB =>{
            return new DogWalking(
                walkingDB.id,
                walkingDB.status,
                walkingDB.schedule,
                walkingDB.price,
                walkingDB.duration,
                walkingDB.latitude,
                walkingDB.longitude,
                walkingDB.pets,
                walkingDB.start_walking,
                walkingDB.finish_walking
            )
        })

        const response:IGetAllWalkingsOutputDTO = {
            walkings
        }

        return response
        
    }

    public getWalkingsbyDate = async (input:IGetAllWalkingsByDateInputDTO) => {
        const search = input.search 
               

        const walkingsDB = await this.dogWalkingDatabase.getWalkingsByDate(search)

        const walkings = walkingsDB?.map(walkingDB =>{
            return new DogWalking(
                walkingDB.id,
                walkingDB.status,
                walkingDB.schedule,
                walkingDB.price,
                walkingDB.duration,
                walkingDB.latitude,
                walkingDB.longitude,
                walkingDB.pets,
                walkingDB.start_walking,
                walkingDB.finish_walking
            )
        })

        const response:IGetAllWalkingsOutputDTO ={
            walkings
        }
        return response
    }



    public createWalk =async (input:ICreateWalkInputDTO) => {
        const {
            schedule, duration, latitude, longitude, pets, start_walking, finish_walking
        } = input

        if(!schedule || !latitude || !longitude || !start_walking || !finish_walking){
            throw new RequestError("Erro: há campos em branco! Por favor, confira seus inputs.")
            }

        if(pets <= 0){
            throw new RequestError("Erro: número de pets deve ser maior que zero.")
        }

        const today = new Date() 
        
        if(new Date(schedule) < today){
            throw new RequestError("Erro: não é possível agendar passeios em dia anterior ao atual.")
        }

        const status = STATUS.TO_DO

        const calculatePrice =  (duration:string, pets:number) => {
            switch(duration){
                case "30":
                    return 25 + (pets > 1 ? (pets - 1) * 15 : 0); 
                case "60":
                    return 35 + (pets > 1 ? (pets - 1) * 20 : 0);
                default: throw new RequestError("Erro: é necessário informar a duração do passeio.")
            }

        }

        const checksWalkDuration = (start_walking:string, finish_walking:string, duration:string) => {
            const start = start_walking.split(":")
            const finish = finish_walking.split(":")
            const walking_duration = Number(duration)

            const start_hour = Number(start[0]) * 60 + Number(start[1])
            const finish_hour = Number(finish[0]) * 60 + Number(finish[1])

            if(finish_hour - walking_duration === start_hour){
                return true
            }
        }

        if(checksWalkDuration(input.start_walking, input.finish_walking, input.duration) !== true){
            throw new RequestError("Erro: confira a duração do passeio!")
        }

        const price = calculatePrice(duration, pets)
        
        const id = this.idGenerator.generate()

        const newDog_Walking = new DogWalking(
            id,
            status,
            schedule,
            price,
            duration,
            latitude,
            longitude,
            pets,
            start_walking,
            finish_walking
        )

        await this.dogWalkingDatabase.createWalk(newDog_Walking)

        const response = {
            message: "Passeio criado com sucesso!",
            newDog_Walking
        }

        return response
    }

    public editWalkingStatus = async (input:IEditWalkingStatusInputDTO) => {

        const  {id, status} = input
        

        if(!id || !status){
            throw new RequestError("Erro: há campos em branco! Por favor, confira seus inputs.")
            }

        const walkingDB = await this.dogWalkingDatabase.getWalkingById(id)

        if(!walkingDB){
            throw new NotFoundError("Erro: passeio não encontrado!")
        }

        if(walkingDB.status === STATUS.DONE){
            throw new UnauthorizedError("Erro: Não é possível alterar o status de passeio concluído!")
        }

        await this.dogWalkingDatabase.editWalkingStatus(id, status)
        
        const response:IEditWalkingStatusOutputDTO = {
            message:`Status do passeio ${id} alterado para '${status}' com sucesso!`
        }

        return response
    }
}