import { carsService } from "../services/CarsService.js";
import BaseController from "../utils/BaseController.js";
import { logger } from "../utils/Logger.js";


export class CarsController extends BaseController {
    constructor() {
        super('api/cars')   //endpoint
        this.router         //basically signage, NOT like JS router
            // make model so as to have data to manipulate
            // need to CREATE based off of model    <---POST
            .post('', this.createCar)

    }

    // these methods take 3 arguments: request, response, next. Do not worry about not all being called (if they remain grey)
    async createCar(request, response, next) {
        // make async
        try {
            logger.log('creating car', request.body)
            const car = await carsService.createCar(request.body)
            response.send(car)
        } catch (error) {
            next(error)
        }
    }
}