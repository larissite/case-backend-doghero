import { BaseDatabase } from "../../src/database/BaseDatabase";
import { ICreateWalkInputDTO, IDogWalkingDB, IEditWalkingStatusInputDTO, STATUS } from "../../src/models/DogWalking"

export class DogWalkingDatabaseMock extends BaseDatabase {
  public static TABLE_DOGWALKING = "Dog_Walking";

  public getAllWalkings = async () => {
    const walkings: IDogWalkingDB[] = [
      {
        id: "201",
        status: STATUS.TO_DO,
        schedule: new Date("2022/09/07"),
        price: 25,
        duration: "30",
        latitude: "14.015",
        longitude: "13.017",
        pets: 1,
        start_walking: "14:00",
        finish_walking: "14:30",
      },

      {
        id: "202",
        status: STATUS.DOING,
        schedule: new Date("2022/09/05"),
        price: 35,
        duration: "60",
        latitude: "13.015",
        longitude: "14.017",
        pets: 1,
        start_walking: "13:00",
        finish_walking: "14:00",
      },

      {
        id: "203",
        status: STATUS.DONE,
        schedule: new Date("2022/09/04"),
        price: 40,
        duration: "30",
        latitude: "15.015",
        longitude: "16.017",
        pets: 2,
        start_walking: "14:00",
        finish_walking: "14:30",
      },
    ];

    return walkings;
  };

  public getWalkingsByStatus = async (search: string) => {
    const walkings: IDogWalkingDB[] = [
      { 
        id: "202",
        status: STATUS.DOING,
        schedule: new Date("2022/09/05"),
        price: 35,
        duration: "60",
        latitude: "13.015",
        longitude: "14.017",
        pets: 1,
        start_walking: "13:00",
        finish_walking: "14:00",
      }   

    ];

    switch (search) {
      case "Doing":
        return walkings;

      default:
        return undefined;
    }
  };

  public getWalkingsByDate = async (search: string) => {
    const walkings: IDogWalkingDB[] = [
      {
        id: "202",
        status: STATUS.DOING,
        schedule: new Date("2022/09/05"),
        price: 35,
        duration: "60",
        latitude: "13.015",
        longitude: "14.017",
        pets: 1,
        start_walking: "13:00",
        finish_walking: "14:00",
      },

      {
        id: "201",
        status: STATUS.TO_DO,
        schedule: new Date("2022/09/07"),
        price: 25,
        duration: "30",
        latitude: "14.015",
        longitude: "13.017",
        pets: 1,
        start_walking: "14:00",
        finish_walking: "14:30",
      },
    ];

    switch (search) {
      case "2022-09-05":
        return walkings;

      default:
        return undefined;
    }
  };

  public createWalk = async (input: ICreateWalkInputDTO) => {

  };

  public editWalkingStatus = async (input: IEditWalkingStatusInputDTO) => {

  };

  public getWalkingById = async (id: string) => {
    switch (id) {
      case "201":
        return {
          id: "201",
          status: STATUS.TO_DO,
          schedule: new Date("2022/09/07"),
          price: 25,
          duration: "30",
          latitude: "14.015",
          longitude: "13.017",
          pets: 1,
          start_walking: "14:00",
          finish_walking: "14:30",
        } as IDogWalkingDB;

        case "203":
            return{
                id: "203",
                status: STATUS.DONE,
                schedule: new Date("2022/09/04"),
                price: 40,
                duration: "30",
                latitude: "15.015",
                longitude: "16.017",
                pets: 2,
                start_walking: "14:00",
                finish_walking: "14:30"
            } as IDogWalkingDB;

      default:
        undefined;
    }
  }

}
