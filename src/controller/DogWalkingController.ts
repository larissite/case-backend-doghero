import { Request, Response } from "express";
import { DogWalkingBusiness } from "../business/DogWalkingBusiness";
import { BaseError } from "../errors/BaseError";
import { ICreateWalkInputDTO, IEditWalkingStatusInputDTO, IGetAllWalkingsByDateInputDTO, IGetWalkingsByStatusInputDTO } from "../models/DogWalking";

export class DogWalkingController {
    constructor(
        private dogWalkingBusiness: DogWalkingBusiness
        ){}        
    

    public getAllWalkings = async (req:Request, res:Response) => {
        try {
            const response = await this.dogWalkingBusiness.getWalkings()
            res.status(200).send(response)
            
        } catch (error:unknown) {
            if(error instanceof BaseError){
                return res.status(error.statusCode).send({message: error.message})
            }

            res.status(500).send({message: "Erro inesperado ao buscar 'walkings'!"})
        }
        
    }

    public getWalkingsByDate = async (req:Request, res:Response) => {
        try {
            const search:IGetAllWalkingsByDateInputDTO ={
                search: req.params.date             

            }

            const response = await this.dogWalkingBusiness.getWalkingsbyDate(search)
            res.status(200).send(response)
            
        } catch (error:unknown) {
            if(error instanceof BaseError){
                return res.status(error.statusCode).send({message: error.message})
            }

            res.status(500).send({message: "Erro inesperado ao buscar 'walkings' por data!"})
        } 
    }

    public getWalkingsByStatus = async (req:Request, res:Response) => {
        try {
            const search:IGetWalkingsByStatusInputDTO ={
                search: req.params.search
            }

            const response = await this.dogWalkingBusiness.getWalkingsByStatus(search)
            res.status(200).send(response)
            
        } catch (error:unknown) {
            if(error instanceof BaseError){
                return res.status(error.statusCode).send({message: error.message})
            }
            console.log(error)

            res.status(500).send({message: "Erro inesperado ao buscar passeios por status!"})
        } 
    }


    public createWalk = async (req:Request, res: Response) => {
        try {
            const input:ICreateWalkInputDTO = {
                schedule: req.body.schedule,
                duration: req.body.duration,
                latitude:req.body.latitude,
                longitude:req.body.longitude,
                pets: req.body.pets,
                start_walking: req.body.start_walking,
                finish_walking: req.body.finish_walking
            }
            
            const response = await this.dogWalkingBusiness.createWalk(input)
            res.status(201).send(response)
            
        } catch (error:unknown) {
            if(error instanceof BaseError){
                return res.status(error.statusCode).send({message: error.message})
            }

            res.status(500).send({message: "Erro inesperado ao criar passeio!"})
        }
    }

    public editWalkingStatus =async (req:Request, res: Response) => {
        try {
            const input:IEditWalkingStatusInputDTO = {
                id: req.params.id,
                status:req.body.status
            } 

            const response = await this.dogWalkingBusiness.editWalkingStatus(input)
            res.status(200).send(response)
            
        } catch (error:unknown) {
            if(error instanceof BaseError){
                return res.status(error.statusCode).send({message: error.message})
            }

            res.status(500).send({message: "Erro inesperado ao editar status de passeio!"})
        }
    }
}