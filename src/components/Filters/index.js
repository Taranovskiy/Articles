import React, { Component } from 'react';
import DateRange from './DateRange';
import Select from './Select';

class Filters extends Component {
    render() {
        return (
            <div>
                <Select />
                <DateRange />
            </div>
        );
    }
}

export default Filters;
