import Document, {Html, Head, Main, NextScript} from 'next/document'
import {createServer, Model} from 'miragejs'

createServer({

    models:{
      transaction: Model,
    },
  
    seeds(server){
      server.db.loadData({
        transactions:[         
          {
            type: 'deposit',
            date: '20/09/22',
            category: 'Alimentação',
            bills: 'Lanches',
            payment: 'À vista',
            bank: 'Banco do Brasil',
            value: 500.00,
            history: 'Compra de pastel'            
            }          
        ]
      })
    },
  
    routes(){
      this.namespace = 'api';
  
      this.get('/transactions', () => {
        return this.schema.all('transaction')
      })
  
      this.post('/transactions', (schema, request) => {
        const data =  JSON.parse(request.requestBody)
  
        return schema.create('transaction', data)
      })
    } 
  })

export default class MyDocument extends Document{    

    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"/> 
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>

            </Html>
        );
    }
}