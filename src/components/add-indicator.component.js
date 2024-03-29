import React, { Component } from 'react';
import axios from 'axios';

export default class AddIndicator extends Component {

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: ''
        }
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

        axios.post('http://localhost:5000/indicators/add', indicator)
            .then(res => console.log(res.data));

        this.setState({
            name: ''
        })
    }

    render() {
        return (
            <div>
                <h3>Create New Indicator</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Indicator: </label>
                        <input  type="text"
                            required
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                            />
                    </div>

                    <div className="form-group"> 
                        <input type="submit" value="Submit" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}