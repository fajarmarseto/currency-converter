import React from 'react';
import Calculator from "./Calculator";
import axios from 'axios';

/*
    @apps Currency Converter
    @version 1.0
    @author Fajar Marseto <fajar.marseto28@gmail.com>
    @date 11 Aug 2019
*/

class App extends React.Component {
    /*
        initialize state
        @state currency is a state that use for storing data currency rate from api
        @state base is a state that use for current currency
        @state isLoaded is a state that flag for loading data
    */
    state = {
        currency: [],
        base: "USD",
        isLoaded: false,
    }

    async componentDidMount() {
        await axios.get(`https://api.exchangeratesapi.io/latest?base=${this.state.base}`)
            .then(res => {
                this.setState({
                    isLoaded: true,
                    currency: res.data,
                });
            })
    }

    render() {
        var {isLoaded, currency} = this.state;

        if(!isLoaded) {
            return <div>Loading . . .</div>;
        } else {
            return (<div className="ui main text container apps">
                <Calculator currency={currency} />
            </div>);
        }
    }
}

export default App;