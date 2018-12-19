import Moment from 'moment';
import { extendMoment } from 'moment-range';
import { articles as defaultArticles } from '../fixtures';
import { SELECT_BY_TITLE, SELECT_BY_DATE_RANGE } from '../constants';

export default (selectArticleState = defaultArticles, action) => {
    const { type, payload } = action;

    switch (type) {
        case SELECT_BY_TITLE:
            console.log('--->>', 'select article!');

            return selectArticleState.filter((article) => {
                const { selection } = payload;
                if (!selection.length) {
                    return true;
                }
                const values = selection.map(({ value }) => value);
                return values.includes(article.id);
            });
        case SELECT_BY_DATE_RANGE:
            return selectArticleState.filter((article) => {
                const { from, to } = payload;
                const moment = extendMoment(Moment);
                const range = moment.range(from, to);
                const artticleDate = moment(article.date);
                // console.log('date--->>', artticleDate.toString());
                return range.contains(artticleDate);
            });

        default:
            return selectArticleState;
    }
};
