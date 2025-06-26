# Microservices Saga Choreography Sequence Diagram

```mermaid
---
config:
  theme: redux-color
  look: neo
---
sequenceDiagram
    actor WebUser as Web User
    participant BFF as BFF
    participant API_Gateway as API Gateway
    participant Order_Service as Order Service
    participant Inventory_Service as Inventory Service
    participant Payment_Service as Payment Service
    participant Event_Grid as Event Grid

    WebUser->>BFF: Submit Order
    BFF->>API_Gateway: Forward Order Request
    API_Gateway->>Order_Service: POST /orders
    Order_Service->>Event_Grid: OrderPlaced
    Event_Grid-->>Inventory_Service: OrderPlaced
    Inventory_Service->>Event_Grid: InventoryReserved
    Event_Grid-->>Payment_Service: InventoryReserved
    Payment_Service->>Event_Grid: PaymentCaptured
    Event_Grid-->>Order_Service: PaymentCaptured
    Order_Service-->>API_Gateway: Order Confirmed
    API_Gateway-->>BFF: Response
    BFF-->>WebUser: Order Completed
```
