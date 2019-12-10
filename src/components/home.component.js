import React, { PureComponent } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';
import axios from 'axios';

const data = []


export default class Home extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {apidata: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api')
            .then(response => {
                this.setState({ apidata: [response.data] })
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 20, right: 30, left: 20, bottom: 5,
                        }}
                    >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip cursor={{ fill: '#ffffff' }} />
                    {/* <Legend /> */}
                    {/* <Bar dataKey="pv" barSize={20} fill="#8884d8" /> */}
                    <Bar dataKey="pv" barSize={30} fill="#4db6ac">{
                        data.map((entry, index) => {
                            return <Cell key={index} fill={entry.open > entry.close ? "#4db6ac" : "#ef5350"} />;
                        })
                    }</Bar>
                </BarChart>
                </ResponsiveContainer>
            </div>
        );
    }
}
