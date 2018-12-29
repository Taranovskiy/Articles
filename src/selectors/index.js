import { createSelector } from 'reselect';
import Moment from 'moment';
import { extendMoment } from 'moment-range';

const articlesGetter = state => state.articles;
const filtersGetter = state => state.filters;
const idGetter = (state, props) => props.id;
const commentsGetter = state => state.comments;

export const filtratedArticlesSelector = createSelector(
    articlesGetter,
    filtersGetter,
    (articles, filters) => articles.filter((article) => {
        const {
            selected,
            range: { from, to },
        } = filters;
        const moment = extendMoment(Moment);
        const range = moment.range(from, to);
        const articleDate = moment(article.date);
        const values = selected.map(item => item.value);
        return (
            (!selected.length || values.includes(article.id))
                && (!to || !from || range.contains(articleDate))
        );
    }),
);

export const commentSelectorFactory = () => createSelector(
    commentsGetter,
    idGetter,
    (comments, id) => comments[id],
);
