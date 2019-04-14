import React, {Component} from 'react';
import CardList from './CardList';

class GroupList extends Component {

    render() {
        const {data} = this.props;
        const list = data.map(
            (info, index) => (<CardList idx={info.idx} title={info.title} key={index} />)
        )
        return (<div>{list}</div>);
    }
}

export default GroupList;