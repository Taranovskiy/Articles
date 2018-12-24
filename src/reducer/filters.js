import { SELECT_BY_TITLE, SELECT_BY_DATE_RANGE, DELETE_ARTICLE } from '../constants';

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
        case DELETE_ARTICLE:
            return {
                ...filters,
                selected: filters.selected.filter(article => article.value !== payload.id),
            };
        default:
            return filters;
    }
};
