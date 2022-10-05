import { createServer, Model, Factory} from 'miragejs'
import { faker } from '@faker-js/faker';

type Transactions = {
    type: string;
    date: string;
    category: string;
    bills: string;
    payment: string;
    bank: string;
    value: number;
    history: string;   
}

export function makeServer(){
    const server = createServer({
        models: {
            transactions: Model.extend<Partial<Transactions>>({})
        },

        //Usa-se factories para poder gerar ususarios aleatorios
        factories: {
            transactions: Factory.extend({
                type (i: number){
                    return `Transactions ${i +1}`
                },
                date (){
                    return faker.date.recent(10);
                },
                category (){
                    return faker.finance.accountName();
                },
                bills (){
                    return faker.finance.accountName();
                },
                payment(){
                    return faker.finance.creditCardCVV();
                },
                bank (){
                    return faker.finance.currencyName();
                },
                value (){
                    return faker.finance.amount();
                }                
            })
        },

        seeds (server){
            server.createList('transactions', 10)
        },

        routes(){
            this.namespace = 'api';
            this.timing = 750;

            this.get('/lancamentos')
            this.post('/lancamentos')
            //Criando as rotas no miragejs

            this.namespace = '';
            this.passthrough();  
        }
    })

    return server;
}