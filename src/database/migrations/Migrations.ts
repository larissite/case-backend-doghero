import { BaseDatabase } from "../../database/BaseDatabase";
import { DogWalkingDatabase } from "../../database/DogWalkingDatabase"
import { pets_walking } from "./data";

class Migrations extends BaseDatabase {
    execute = async () => {
        try {
            console.log("Creating tables...")
            await this.createTables()
            console.log("Tables created successfully.")

            console.log("Populating tables...")
            await this.insertData()
            console.log("Tables populated successfully.")

            console.log("Migrations completed.")
        } catch (error) {
            console.log("FAILED! Error in migrations...")
            console.log(error.message)
        } finally {
            console.log("Ending connection...")
            BaseDatabase.connection.destroy()
            console.log("Connection closed graciously.")
        }
    }

    createTables = async () => {
        await BaseDatabase.connection.raw(`
        DROP TABLE IF EXISTS ${DogWalkingDatabase.TABLE_DOGWALKING};
 
        
        CREATE TABLE IF NOT EXISTS ${DogWalkingDatabase.TABLE_DOGWALKING}(
            id VARCHAR(255) PRIMARY KEY NOT NULL,
            status ENUM("To Do", "Doing", "Done") DEFAULT "To Do" NOT NULL,
            schedule DATE NOT NULL,
            price DOUBLE NOT NULL,
            duration VARCHAR(255) NOT NULL,
            latitude FLOAT NOT NULL,
            longitude FLOAT NOT NULL,
            pets INT NOT NULL, 
            start_walking TIME NOT NULL,
            finish_walking TIME NOT NULL
        );
        `)
    }

    insertData = async () => {
        await BaseDatabase
            .connection(DogWalkingDatabase.TABLE_DOGWALKING)
            .insert(pets_walking)

    }
}

const migrations = new Migrations()
migrations.execute() 
