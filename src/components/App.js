import React from 'react';
import Calculator from "./Calculator";
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currency: [],
            base: "USD",
            isLoaded: false,
        }
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