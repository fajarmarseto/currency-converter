import React from 'react';
import CurrencyTarget from "./CurrencyTarget";
import CurrencySelect from "./CurrencySelect";

class Calculator extends React.Component {
    state = { 
        term: '10.00',
        currencies: [ 
            { code: "USD", name: "United States Dollar" },
            { code: "CAD", name: "Canadian Dollar" }, 
            { code: "IDR", name: "Indonesian Rupiah" },
            { code: "GBP", name: "British Pound" },
            { code: "CHF", name: "Switzerland Franc" },
            { code: "SGD", name: "Singapore Dollar" },
            { code: "INR", name: "Indian Rupee" },
            { code: "MYR", name: "Malaysian ringgit" },
            { code: "JPY", name: "Japanese Yen" },
            { code: "KRW", name: "Korean Won" }
        ],
        currencyList: [
            { id: "", code: "", name: "", rate: "" }
        ]
    };

    onFormSubmit = event => {
        event.preventDefault();
    }

    addCurrency = (currencySelect) => {
        const rate = this.props.currency.rates[currencySelect];

        this.state.currencies.find(item => {
            if (currencySelect === item.code) {
                item.id = Math.random();
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
                                <input className="right aligned segment" type="number" value={(this.state.term)} onChange={(e) => this.setState({ term: e.target.value })}></input>
                            </div>
                            <div className="base-name">{this.props.currency.base}</div><p>United State Dollar</p>
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