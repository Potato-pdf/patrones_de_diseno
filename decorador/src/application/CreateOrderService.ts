import {logger} from "../infraestructure/Logger"
import {metrics} from "../infraestructure/Metrics"
import type {IOrderService} from "../domain/IOrderService"

export class CreateOrderService implements IOrderService {
    async execute(orderDATA: any) {
        logger.info(`Creating order for ${orderDATA.customerName}`);
    
        if (!orderDATA.items || orderDATA.items.length === 0) {
            throw new Error("Order must have at least one item");
        }

        console.log(`Order for ${orderDATA.customerName} created successfully`);
        const order = { id: Math.random(), ...orderDATA };
   
        metrics.increment("orders.created");
        return order;
    }
}
