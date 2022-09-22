// import {createContext, useState, useEffect, ReactNode, useContext} from 'react'
// import {api} from '../services/api';


// interface Transaction{
//     // id: number;
//     type: string;
//     date: string;
//     category: string;
//     bills: string;
//     payment: string;
//     bank: string;
//     value: number;
//     history: string;           
// }

// interface TransactionsProvideProps{
//     children: ReactNode;    
// }

// interface TransactionInput{
//     // id: number;
//     type: string;
//     date: string;
//     category: string;
//     bills: string;
//     payment: string;
//     bank: string;
//     value: number;
//     history: string;
// }

// interface TransactionsContextData{
//     transactions: Transaction[];
//     createTransaction: (transaction: TransactionInput) => Promise<void>;
// }

// const TransactionsContext = createContext<TransactionsContextData>(
//     {} as TransactionsContextData
// ); 


// export function TransactionsProvider({children}:TransactionsProvideProps){

//     const [transactions, setTransactions] = useState<Transaction[]>([]);

//     useEffect(() => {
//         api.get('transactions')        
//         .then(response => setTransactions(response.data.transactions))
//     }, []);

//     // ADICIONANDO UMA NOVA TRANSAÇÃO DA TELA
//     async function createTransaction(transactionInput: TransactionInput){
        
//         const response = await api.post('/transactions', {
//             ...transactionInput,
//             createdAt: new Date(), 
//         })
//         const {transaction} = response.data;

//         // CONCEITO DE IMUTABILIDADE
//         setTransactions([
//             ...transactions,
//             transaction,
//         ]);
//     }

//     return(
//         <TransactionsContext.Provider value={{transactions, createTransaction}}>
//             {children}
//         </TransactionsContext.Provider>
//     );

// }

// // fazendo um hooks
// export function useTransactions(){
//     const context = useContext(TransactionsContext);
//     return context;
// }
