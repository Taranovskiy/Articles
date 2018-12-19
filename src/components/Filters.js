import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from 'react-select';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import moment from 'moment';
import { Helmet } from 'react-helmet';
import { formatDate, parseDate } from 'react-day-picker/moment';
import { selectArticle, dateRange } from '../AC';

class Filters extends Component {
    static propTypes = {
        // from connect
        articles: PropTypes.array,
        selectArticle: PropTypes.func,
        dateRange: PropTypes.func,
    };

    options = this.props.articles.map(article => ({
        label: article.title,
        value: article.id,
    }));

    range = {
        from: null,
        to: null,
    };

    render() {
        const { from, to } = this.range;
        const modifiers = { start: from, end: to };

        return (
            <div>
                <Select
                    options = {this.options}
                    value = {undefined}
                    onChange = {this.changeSelection}
                    isMulti
                />
                <div className = "InputFromTo">
                    <DayPickerInput
                        value = ""
                        placeholder = "From"
                        format = "LL"
                        formatDate = {formatDate}
                        parseDate = {parseDate}
                        dayPickerProps = {{
                            selectedDays: [from, { from, to }],
                            disabledDays: { after: to },
                            toMonth: to,
                            modifiers,
                            numberOfMonths: 2,
                            onDayClick: () => this.to.getInput().focus(),
                        }}
                        onDayChange = {this.handleFromChange}
                    />
                    —
                    <span className = "InputFromTo-to">
                        <DayPickerInput
                            ref = {el => (this.to = el)}
                            value = ""
                            placeholder = "To"
                            format = "LL"
                            formatDate = {formatDate}
                            parseDate = {parseDate}
                            dayPickerProps = {{
                                selectedDays: [from, { from, to }],
                                disabledDays: { before: from },
                                modifiers,
                                month: from,
                                fromMonth: from,
                                numberOfMonths: 2,
                            }}
                            onDayChange = {this.handleToChange}
                        />
                    </span>
                    <Helmet>
                        <style>
                            {`
                    .InputFromTo .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
                        background-color: #f0f8ff !important;
                        color: #4a90e2;
                    }
                    .InputFromTo .DayPicker-Day {
                        border-radius: 0 !important;
                    }
                    .InputFromTo .DayPicker-Day--start {
                        border-top-left-radius: 50% !important;
                        border-bottom-left-radius: 50% !important;
                    }
                    .InputFromTo .DayPicker-Day--end {
                        border-top-right-radius: 50% !important;
                        border-bottom-right-radius: 50% !important;
                    }
                    .InputFromTo .DayPickerInput-Overlay {
                        width: 550px;
                    }
                    .InputFromTo-to .DayPickerInput-Overlay {
                        margin-left: -198px;
                    }
                    `}
                        </style>
                    </Helmet>
                </div>
            </div>
        );
    }

    changeSelection = (selection = []) => {
        const { selectArticle } = this.props;

        selectArticle(selection);
    };

    handleFromChange = (from) => {
        const { dateRange } = this.props;
        this.range.from = from;

        if (this.range.from && this.range.to) {
            dateRange(this.range);
        }
    };

    handleToChange = (to) => {
        const { dateRange } = this.props;
        this.range.to = to;

        if (this.range.from && this.range.to) {
            dateRange(this.range);
        }
    };
}

export default connect(
    ({ articles }) => ({
        articles,
    }),
    { selectArticle, dateRange },
)(Filters);
