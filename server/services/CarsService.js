import { dbContext } from "../db/DbContext.js"


// const carsDb = {
//     cars: [
//         { make: 'Kia', model: 'Sorrento', year: 2000, price: 5600, imgURL: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80', color: '#ffffff', description: 'night racer' }
//     ]

// }

class CarsService {

    async createCar(carData) {
        const car = await dbContext.Cars.create(carData)
        return car
    }

}

export const carsService = new CarsService