import React from 'react';
import NumberFormat from 'react-number-format';

/*
    @apps Currency Converter
    @version 1.0
    @author Fajar Marseto <fajar.marseto28@gmail.com>
    @date 11 Aug 2019
*/

//this is a function showing lists of selected currency
const CurrencyTarget = ({currencies, count, deleteCurrency}) => {
    const currenciesList = currencies.map((currency, index) => {
        if (index>0){
            return (
                <div key={currency.id} className="ui segment">
                    <div className="ui grid card-target-currency">
                        <div className="twelve wide column">
                            <div className="ui grid target-count-rate">
                                <div className="four wide column target-count-rate-code">{currency.code}</div>
                                <div className="twelve wide column target-count-rate-count"><NumberFormat value={currency.rate * count} displayType={'text'} thousandSeparator={true} decimalScale="4" /></div>
                            </div>
                            <div className="target-code-name">{currency.code} - <i className={`${currency.flag} flag`}></i>{currency.name}</div>
                            <div className="target-rate">1 USD = {currency.code} <NumberFormat value={currency.rate} displayType={'text'} thousandSeparator={true} decimalScale="4"></NumberFormat></div>
                        </div>
                        <div className="four wide column button-target">
                            <button className="ui red button button-click" onClick={() => {deleteCurrency(currency.id)}}>X</button>
                        </div>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    })
    return (
        <form className="ui container curr-target">{currenciesList}</form>
    );
    
}

export default CurrencyTarget;