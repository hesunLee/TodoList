import React, {Component} from 'react';
import Card from './Card'
import '../css/CardList.css'

class CardList extends Component {
    render() {
        const {idx, title} = this.props;
        return (
            <div className="cardListArea">
                <div className="groupTitle">{title}</div>
                <Card group_idx={idx}/>
            </div>
        )
    }
}

export default CardList;