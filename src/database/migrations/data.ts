import {IDogWalkingDB, STATUS} from "../../models/DogWalking"

export const pets_walking:IDogWalkingDB[] = [

    {
        id: "201",
        status: STATUS.TO_DO, 
        schedule: new Date("2022/09/09"),
        price: 25,
        duration: "30",
        latitude: "14.015",
        longitude: "13.017",
        pets: 1,
        start_walking: "14:00",
        finish_walking: "14:30"
    },

    {
        id: "202",
        status: STATUS.DOING, 
        schedule: new Date("2022/09/08"),
        price: 35,
        duration: "60",
        latitude: "13.015",
        longitude: "14.017",
        pets: 1,
        start_walking: "13:00",
        finish_walking: "14:00"
    },

    {
        id: "203",
        status: STATUS.DONE, 
        schedule: new Date("2022/09/07"),
        price: 40,
        duration: "30",
        latitude: "15.015",
        longitude: "16.017",
        pets: 2,
        start_walking: "14:00",
        finish_walking: "14:30"
    },

    {
        id: "204",
        status: STATUS.TO_DO, 
        schedule: new Date("2022/09/10"),
        price: 25,
        duration: "30",
        latitude: "15.015",
        longitude: "16.017",
        pets: 1,
        start_walking: "13:00",
        finish_walking: "13:30"
    },

    {
        id: "205",
        status: STATUS.DONE, 
        schedule: new Date("2022/09/04"),
        price: 35,
        duration: "60",
        latitude: "15.015",
        longitude: "16.017",
        pets: 1,
        start_walking: "15:00",
        finish_walking: "16:00"
    }


]