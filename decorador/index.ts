const service = new OrderService();
const metricsService = new MetricsOrderDecorator(service);
const logService = new LogOrderDecorator(metricsService);

logService.execute({ customerName: "John Doe", items: ["item1", "item2"] })
.then(() => console.log("Order processed successfully"))
.catch((err) => console.error("Error processing order:", err));