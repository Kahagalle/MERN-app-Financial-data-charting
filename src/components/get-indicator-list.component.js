import React, { Component } from 'react';
import axios from 'axios';

export default class GetIndicatorList extends Component {

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            indicators: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/indicators')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        indicators: response.data.map(indicator => indicator.name),
                        name: response.data[0].name
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const indicator = {
            name: this.state.name
        }

        console.log(indicator);
        window.location = "/";
    }

    render() {
        return (
            <div>
                <h3>Get All Indicators</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Name: </label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}>
                            {
                                this.state.indicators.map(function(indicator) {
                                return <option 
                                    key={indicator}
                                    value={indicator}>{indicator}
                                    </option>;
                                })
                            }
                        </select>
                    </div>

                    <div className="form-group"> 
                        <input type="submit" value="Submit" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}