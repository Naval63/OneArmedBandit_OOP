class Wallet {
    constructor(money) {
        let _money = money
        // aktualna ilość kasy
        this.getWalletValue = () => _money;

        // odpowiednia ilość środków
        this.checkCanPlay = (value) => {
            if(_money >= value) return true;
            return false;
        }
        
        this.changeWallet = (value, type='+') => {
            if(typeof value === 'number' && !isNaN(value))
            {
                if(type === '+') {
                    return _money += value;
                } else if(type === '-') {
                    return _money -= value;
                } else {
                    throw new Error('nieprawidłowy typ działania')
                }

            } else {
                console.log(typeof value);
                throw new Error ('nieprawidłowa liczba')
            }

        }
    }
}

// const wallet = new Wallet(200);