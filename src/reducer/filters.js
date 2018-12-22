import { SELECT_BY_TITLE, SELECT_BY_DATE_RANGE } from '../constants';

const defaultFilters = {
    selected: [],
    range: {
        from: null,
        to: null,
    },
};

export default (filters = defaultFilters, action) => {
    const { type, payload } = action;

    switch (type) {
        case SELECT_BY_TITLE:
            return { ...filters, selected: payload.selected };
        case SELECT_BY_DATE_RANGE:
            return { ...filters, range: { from: payload.from, to: payload.to } };
        default:
            return filters;
    }
};
