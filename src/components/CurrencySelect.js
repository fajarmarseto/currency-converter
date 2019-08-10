import React from 'react';

class CurrencySelect extends React.Component {
    state = { 
        currencies: ["USD", "CAD", "IDR", "GBP", "CHF", "SGD", "INR", "MYR", "JPY", "KRW"],
        currencySelected: ""
    };

    handleChange = (e) => {
        this.setState({
            currencySelected: e.target.value
        })
    }

    handleSubmit = (e) => {
        var index = this.state.currencies.indexOf(this.state.currencySelected);
        delete this.state.currencies[index];
        e.preventDefault();
        this.props.addCurrency(this.state.currencySelected);
    }

    render() {
        return (
            <form className="ui container curr-target" onSubmit={this.handleSubmit}>
                <div className="ui grid">
                    <div className="eleven wide column">
                        <select className="ui fluid dropdown" onChange={this.handleChange} value={this.state.value}>
                            <option value="">Add more currencies</option>
                            {this.state.currencies.map(currencySelected => (
                                <option key={currencySelected} value={currencySelected}>
                                    {currencySelected}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="four wide column button-form">
                        <button className="ui primary button">ADD</button>
                    </div>
                </div>
            </form>
        );
    }
};

export default CurrencySelect;