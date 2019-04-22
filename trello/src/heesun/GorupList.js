import React, {Component} from 'react';
import CardList from './CardList';
import '../css/GroupList.css'

class GroupList extends Component {

    render() {
        const {data, onEditClick, onEditSubmit} = this.props;
        const list = data.map(
            (info, index) =>
                (<CardList idx={info.idx}
                           title={info.title}
                           isUpdate={info.isUpdate}
                           key={index}
                           onEditClick={onEditClick}
                           onEditSubmit={onEditSubmit}
                />)
        )
        return (<div className="groupArea">{list}</div>);
    }
}

export default GroupList;