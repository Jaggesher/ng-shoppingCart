export interface Shipment {
    id: string;
    name: string;
    address: string;
    phone: string;
    totalCost: string;
    isDelivered: boolean;
    orderedProduct: Object[];
}
