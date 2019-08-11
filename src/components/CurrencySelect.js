import React from 'react';

/*
    @apps Currency Converter
    @version 1.0
    @author Fajar Marseto <fajar.marseto28@gmail.com>
    @date 11 Aug 2019
*/

//This is a function for selecting currency
class CurrencySelect extends React.Component {
    /*
        initialize state
        @state currenciesDropdown save data for dropdown menu
        @state currencySelected is a state stores the temporary currency that is selected for removal from the dropdown
    */
    state = { 
        currenciesDropdown: ["USD", "CAD", "IDR", "GBP", "CHF", "SGD", "INR", "MYR", "JPY", "KRW"],
        currencySelected: ""
    };

    //save value changes from input tag
    handleChange = (e) => {
        this.setState({
            currencySelected: e.target.value
        })
    }

    handleSubmit = (e) => {
        //remove the selected currency from the dropdown menu
        var index = this.state.currenciesDropdown.indexOf(this.state.currencySelected);
        delete this.state.currenciesDropdown[index];

        e.preventDefault();

        //add selected currency
        this.props.addCurrency(this.state.currencySelected);
    }

    render() {
        return (
            <form className="ui container curr-target" onSubmit={this.handleSubmit}>
                <div className="ui grid">
                    <div className="eleven wide column">
                        <select className="ui fluid dropdown" onChange={this.handleChange} value={this.state.value}>
                            <option value="">Choose more currencies</option>
                            {this.state.currenciesDropdown.map(currencySelected => (
                                <option key={currencySelected} value={currencySelected}>
                                    {currencySelected}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="four wide column button-form">
                        <button className="ui primary basic button">ADD</button>
                    </div>
                </div>
            </form>
        );
    }
};

export default CurrencySelect;