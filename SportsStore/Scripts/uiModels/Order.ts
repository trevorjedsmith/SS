namespace SportsStore
{
    export class Order {


        constructor(private Id: number, private Name: string, private Line1: string, private Line2: string,
            private Line3: string, private City: string, private State: string, private Zip: string, private Country: string, private GiftWrap: boolean, private OrderLine: Array<any>) {

        }    
        
    }
}