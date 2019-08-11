import React from 'react';
import CurrencyTarget from "./CurrencyTarget";
import CurrencySelect from "./CurrencySelect";

/*
    @apps Currency Converter
    @version 1.0
    @author Fajar Marseto <fajar.marseto28@gmail.com>
    @date 11 Aug 2019
*/

class Calculator extends React.Component {
    /*
        initialize state
        @state term is initial default value USD
        @state currencies save data that is not provided by api
        @state currencyList is a state that will store currency data for display
    */
    state = { 
        term: '10.00',
        currencies: [ 
            { code: "USD", flag: "us", name: "United States Dollar" },
            { code: "CAD", flag: "ca", name: "Canadian Dollar" }, 
            { code: "IDR", flag: "id", name: "Indonesian Rupiah" },
            { code: "GBP", flag: "gb uk", name: "British Pound" },
            { code: "CHF", flag: "ch", name: "Switzerland Franc" },
            { code: "SGD", flag: "sg", name: "Singapore Dollar" },
            { code: "INR", flag: "in", name: "Indian Rupee" },
            { code: "MYR", flag: "my", name: "Malaysian ringgit" },
            { code: "JPY", flag: "jp", name: "Japanese Yen" },
            { code: "KRW", flag: "kr", name: "Korean Won" }
        ],
        currencyList: [
            { id: "", code: "", name: "", rate: "" }
        ]
    };

    onFormSubmit = event => {
        event.preventDefault();
    }

    //add currency selected from dropdown menu
    addCurrency = (currencySelect) => {
        //storing selected rate
        const rate = this.props.currency.rates[currencySelect];

        //find selected currency in @state currencies for more detail
        this.state.currencies.find(item => {
            if (currencySelect === item.code) {
                item.id = Math.random();
                //save selected rate @const rate
                item.rate = rate;
                let currencies = [...this.state.currencyList, item];
                return (
                    this.setState({
                        currencyList: currencies
                    })
                );
            }
            return null;
        })
    }

    //delete currency from list currencies card
    deleteCurrency = (id) => {
        let currencyList = this.state.currencyList.filter(currency => {
            return currency.id !== id
        });
        this.setState({
            currencyList: currencyList
        })
    }

    render() {
        return (
        <div className="ui segment form calculator-form">
            <div className="tittle-calculator">
                <div className="name-calculator">Currency Converter</div>
                <div className="date-calculator">Last update, {this.props.currency.date}</div>
                <hr></hr>
            </div>
            <div className="two fields calculator-body">
                <div className="field">  
                    <form onSubmit={this.onFormSubmit} className="ui container">
                        <div className="right-calculator">
                            <div className="ui fluid labeled input">
                                <label className="ui label">$</label>
                                <input className="input-count" type="number" value={(this.state.term)} onChange={(e) => this.setState({ term: e.target.value })} min="0" step="0.01"></input>
                            </div>
                            <div className="base-name">{this.props.currency.base}</div><p><i className="us flag"></i>United State Dollar</p>
                        </div>
                    </form>
                </div>
                <div className="field">
                    <CurrencySelect addCurrency={this.addCurrency} />
                    <CurrencyTarget currencies={this.state.currencyList} count={this.state.term} deleteCurrency={this.deleteCurrency} />
                </div>
            </div>
        </div>);
    }
}

export default Calculator;