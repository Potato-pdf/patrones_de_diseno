export interface IOrderService {
    execute(orderDATA: any): Promise<any>;
}