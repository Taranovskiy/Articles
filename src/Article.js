import React, {Component} from 'react';

export default class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
    }

    render() {
        const {article} = this.props;
        const {isOpen} = this.state;

        return(
            <div>
                <h3>{article.title}</h3>
                <button onClick = {this.toogleOpen}>
                    {isOpen ? 'close' : 'open'}
                </button>
                {this.getBody()}
            </div>
        )
    }
    
    getBody() {
        const {article} = this.props;
        const {isOpen} = this.state;

        return isOpen ? <section>{article.text}</section> : null;
    }

    toogleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}