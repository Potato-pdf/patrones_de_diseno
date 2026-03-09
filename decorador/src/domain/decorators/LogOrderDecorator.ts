import type  {IOrderService} from "../IOrderService"

/**
 * Decorator for logging order creation.
 */
export class LogOrderDecorator implements IOrderService {
    
    private readonly service: IOrderService

    constructor(service: IOrderService) {
        this.service = service;
    }

    
    async execute(orderDATA: any): Promise<any> {
        console.log("Creatingorder");
        const result = await this.service.execute(orderDATA);
        console.log(`Order for created successfully`);
        return result;
    }

}