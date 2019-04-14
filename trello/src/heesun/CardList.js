import React, {Component} from 'react';
import Card from './Card'

class CardList extends Component {
    render() {
        const {idx, title} = this.props;
        return (
            <div >
                <div>{title}</div>
                <Card group_idx={idx}/>
            </div>
        )
    }
}

export default CardList;