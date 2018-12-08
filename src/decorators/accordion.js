import React, {Component as ReactComponent} from 'react';

export default (OriginalComponent) => class Accordion extends ReactComponent {
    state = {
        openArticleId: null
    }

    render() {
        return (
            <OriginalComponent 
                {...this.props}
                {...this.state}
                toggleOpenArticle = {this.toggleOpenArticle}
            />
        );
    }

    toggleOpenArticle = (id) => () => {
        if (id === this.state.openArticleId) {
            this.setState({openArticleId: null});
        } else {
            this.setState({openArticleId: id});
        }
    }
}