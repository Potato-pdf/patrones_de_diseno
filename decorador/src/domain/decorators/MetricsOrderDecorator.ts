import type { IOrderService } from "../IOrderService";


/**
 * Decorator for tracking metrics of order creation.
 */
export class MetricsOrderDecorator implements IOrderService {
    private readonly service: IOrderService

    constructor(service: IOrderService) {
        this.service = service;
    }

    async execute(orderDATA: any): Promise<any> {
        const start = Date.now();
        const result = await this.service.execute(orderDATA);
        const latency = Date.now() - start;
        console.log(`Metrics updated for order ${orderDATA.customerName}. Execution time: ${latency}ms`);
        return result;
    }
}