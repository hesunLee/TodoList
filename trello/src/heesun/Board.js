import React, {Component} from 'react';
import GroupList from './GorupList';
import AddForm from './AddForm';
import '../css/Board.css'

class Board extends Component {
    //group list 의 idx
    group_idx = 2;
    state = {
        group_list : [
            {idx: 1, title : 'test'}
        ],
        group_title_form : false, //group title 입력 폼 활성화 여부
    };

    //addForm 의 등록 버튼 클릭시 이벤트
    handleAddSubmit = (e) => {
        const {group_list} = this.state;
        this.setState({
            group_list: group_list.concat({idx: this.group_idx++ , title: e.title}),
            group_title_form: false
        });
    };

    //addForm add click 버튼 클릭시 이벤트
    handleAddClick = (e) => {
        const {group_list} = this.state;
        this.setState({
            group_list,
            group_title_form : true,
        });
    };

    render() {
        return (
            <div className="boardArea">
                <GroupList data={this.state.group_list} />
                <AddForm onClick={this.handleAddClick}
                         onSubmit={this.handleAddSubmit}
                         isInsertForm={this.state.group_title_form} />
            </div>
        )
    }
}

export default Board