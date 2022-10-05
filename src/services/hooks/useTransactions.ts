import {useQuery} from 'react-query'
import {api} from '../api'

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

export async function getTransactions(): Promise<Transactions[]> {
    const {data} = await api.get('transactions')
    // const data = await response.json()

    const transactions = data.transactions.map(transactions => {
        return{
            id: transactions.id,
            type: transactions.type,
            date: new Date(transactions.date).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year:'numeric'
            }),
            category: transactions.category,
            bills: transactions.bills,
            payment: transactions.payment,
            bank: transactions.bank,
            value: transactions.value,
            history: transactions.history,
           
        };            
    });

    return transactions;  
}

export function Transactions(){
    return useQuery('users', getTransactions,  
    );
}