import Moment from 'moment';
import { extendMoment } from 'moment-range';
import { articles as defaultArticles } from '../fixtures';
import { DELETE_ARTICLE, SELECT_ARTICLE, DATE_RANGE } from '../constants';

export default (articleState = defaultArticles, action) => {
    const { type, payload } = action;

    switch (type) {
        case DELETE_ARTICLE:
            return articleState.filter(article => article.id !== payload.id);
        case SELECT_ARTICLE:
            return defaultArticles.filter((article) => {
                const { selection } = payload;
                if (!selection.length) {
                    return true;
                }
                const values = selection.map(({ value }) => value);
                return values.includes(article.id);
            });
        case DATE_RANGE:
            return defaultArticles.filter((article) => {
                const { from, to } = payload;
                const moment = extendMoment(Moment);
                const range = moment.range(from, to);
                const artticleDate = moment(article.date);
                // console.log('date--->>', artticleDate.toString());
                return range.contains(artticleDate);
            });

        default:
            return articleState;
    }
};
