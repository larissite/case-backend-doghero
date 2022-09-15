export enum STATUS {
    TO_DO = 'To Do',
    DOING = 'Doing',
    DONE = 'Done'
}


export interface IDogWalkingDB {
    id: string,
    status: STATUS, 
    schedule: Date,
    price: number
    duration: string,
    latitude: string,
    longitude: string,
    pets: number,
    start_walking: string,
    finish_walking: string
}

export class DogWalking {
    constructor(
        private id: string,
        private status: STATUS,
        private schedule: Date,
        private price: number,
        private duration: string,
        private latitude: string,
        private longitude: string,
        private pets: number,
        private start_walking: string,
        private finish_walking: string
    ){}

    public getId = () => {
        return this.id
    }

    public getStatus = () => {
        return this.status
    }

    public getSchedule = () => {
        return this.schedule
    }

    public getPrice = () => {
        return this.price
    }

    public getDuration = () => {
        return this.duration
    }

    public getLatitude = () => {
        return this.latitude
    }

    public getLongitude = () => {
        return this.longitude
    }

    public getPets = () => {
        return this.pets
    }

    public getStart_Walking = () => {
        return this.start_walking
    }

    public getFinish_Walking = () => {
        return this.finish_walking
    }

    public setId = (newId: string) => {
        this.id = newId
    }

    public setStatus = (newStatus: STATUS) => {
        this.status = newStatus
    }

    public setSchedule = (newSchedule: Date) => {
        this.schedule = newSchedule
    }

    public setPrice = (newPrice: number) => {
        this.price = newPrice
    }

    public setDuration = (newDuration:string) => {
        this.duration = newDuration
    }

    public setLatitude = (newLatitude: string) => {
        this.latitude = newLatitude
    }

    public setLongitude = (newLongitude: string) => {
        this.longitude = newLongitude
    }

    public setPets = (newPets: number) => {
        this.pets = newPets
    }

    public setStart_Walking = (newStart_Walking:string) => {
        this.start_walking = newStart_Walking
    }

    public setFinish_Walking = (newFinish_Walking:string) => {
        this.finish_walking = newFinish_Walking
    }

}

export interface ICreateWalkInputDTO {

         schedule: Date,
         duration: string,
         latitude: string,
         longitude: string,
         pets: number,
         start_walking: string,
         finish_walking: string


}

export interface IGetAllWalkingsOutputDTO {
    walkings: DogWalking[]
}

export interface IGetAllWalkingsByDateInputDTO{
    search: string
}

export interface IGetWalkingsByStatusInputDTO{
    search: string
}

export interface IEditWalkingStatusInputDTO{
    id: string,
    status: STATUS
}

export interface IEditWalkingStatusOutputDTO{
    message: string
}