import React, {Component} from 'react';
import Card from './Card'
import '../css/CardList.css'

class CardList extends Component {
    state = {title : ''};

    handelKeyDown = (e) => {
        console.log(e.key);
        if (e.key === 'Enter') {
            const {onEditSubmit, idx} = this.props;
            onEditSubmit(idx, this.state.title);
        } else {
            this.setState({
                [e.target.name] : e.target.value
            });
        }
    }

    handleGroupTitle = (e) => {
        const {idx, title, onEditClick } = this.props;
        this.setState({title: title});
        onEditClick(idx);
    }


    render() {
        const {idx, title, isUpdate } = this.props;
        return (
            <div className="cardListArea">
                <div className="groupTitle">
                    {isUpdate ?
                        (<input type="text" value={this.state.title} name="title" onChange={this.handelKeyDown} />) :
                        (<div onClick={this.handleGroupTitle}>{title}</div>) }
                </div>
                <Card group_idx={idx}/>
            </div>
        )
    }
}

export default CardList;