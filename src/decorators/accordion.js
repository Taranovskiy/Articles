import React, {Component as ReactComponent} from 'react';

export default (OriginalComponent) => class Accordion extends ReactComponent {
    state = {
        openItemId: null
    }

    render() {
        return (
            <OriginalComponent 
                {...this.props}
                {...this.state}
                toggleOpenItem = {this.toggleOpenItem}
            />
        );
    }

    toggleOpenItem = (id) => () => {
        if (id === this.state.openItemId) {
            this.setState({openItemId: null});
        } else {
            this.setState({openItemId: id});
        }
    }
}