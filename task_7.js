// Відразу признаюсь, що 7 завдання робив по Вашому зразку... 
// тобто не робив, а розбирав і паралельно переписував код...
// завдяки чому і зрозумів сповна все що неписано нижче) ну майже все...


const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};


//   Кожна транзакція - це об'єкт з властивостями: id, type і amount


const account = {
    id: 0,
    // Поточний баланс рахунку
    balance: 0,

    // Історія транзакцій
    transactions: [],


//   Метод створює і повертає об'єкт транзакції.
//   Приймає суму і тип транзакції.

    createTransaction(amount, type) {
        this.id += 1;
        console.log('id:', this.id);
        return {
            id: this.id,
            type: type,
            amount: amount,
        }
     },


//   Метод відповідає за додавання суми до балансу.
//   Приймає суму танзакції.
//   Викликає createTransaction для створення об'єкта транзакції
//   після чого додає його в історію транзакцій

    deposit(amount) { 
        this.balance += amount;
        const newTransaction = this.createTransaction(amount, Transaction.DEPOSIT);
        this.transactions.push(newTransaction);
    },

//   Метод відповідає за зняття суми з балансу.
//   Приймає суму танзакції.
//   Викликає createTransaction для створення об'єкта транзакції
//   після чого додає його в історію транзакцій.
//  
//   Якщо amount більше, ніж поточний баланс, виводь повідомлення
//   про те, що зняття такої суми не можливо, недостатньо коштів.

    withdraw(amount) {
        if(this.balance < this.amount) {
            console.log('You have no money');
        }   else {
            this.balance -= amount;
            const newTransaction = this.createTransaction(amount, Transaction.WITHDRAW);
            this.transactions.push(newTransaction);
        }
     },


//   Метод повертає поточний баланс

    getBalance() { return this.balance },


//   Метод шукає і повертає об'єкт транзакції по id

    getTransactionDetails(id) { 
        for (const transaction of this.transactions) {
            if(transaction.id === id) {
                return transaction;
            }
        }
    },


//    Метод повертає кількість коштів
//    певного типу транзакції з усієї історії транзакцій

    getTransactionTotal(type) {
        let sum = 0;
        for (const transaction of this.transactions) {
            if(transaction.type === type) {
                sum += transaction.amount;
            }
        }
        return sum;
     },
};

account.deposit(200);
account.deposit(300);
account.deposit(400);
account.withdraw(200);
account.withdraw(300);
account.withdraw(400);
console.log(account.getTransactionDetails(2));
console.log(account.getTransactionTotal("withdraw"));
console.log(account);