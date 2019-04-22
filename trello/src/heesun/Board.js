import React, {Component} from 'react';
import GroupList from './GorupList';
import AddForm from './AddForm';
import '../css/Board.css'

class Board extends Component {
    //group list �� idx
    group_idx = 2;
    state = {
        group_list : [
            {idx: 1, title : 'test', isUpdate:false}
        ],
        group_title_form : false, //group title �Է� �� Ȱ��ȭ ����
    };

    //addForm �� ��� ��ư Ŭ���� �̺�Ʈ
    handleAddSubmit = (e) => {
        const {group_list} = this.state;
        this.setState({
            group_list: group_list.concat({idx: this.group_idx++ , title: e.title, isUpdate:false}),
            group_title_form: false
        });
    };

    //addForm add click ��ư Ŭ���� �̺�Ʈ
    handleAddClick = (e) => {
        const {group_list} = this.state;
        this.setState({
            group_list,
            group_title_form : true,
        });
    };

    handleEditClick = (idx) => {
        this.actionEdit(idx, true);
    }

    handleEditSubmit = (idx, title) => {
        this.actionEdit(idx, false, title);
    }
    actionEdit = (idx, isForm, info = '') => {
        const {group_list, group_title_form} = this.state;
        const index = group_list.findIndex(list => list.idx === idx);
        const group = group_list[index];

        const newGroup = [...group_list];
        if (isForm) {
            newGroup[index] = {
                ...group,
                isUpdate: true
            };
        } else {
            newGroup[index] = {
                ...group,
                isUpdate: false,
                title: info
            };
        }

        this.setState({
            group_list: newGroup,
            ...group_title_form
        });
    }


    render() {
        return (
            <div className="boardArea">
                <GroupList
                    data={this.state.group_list}
                    onEditClick={this.handleEditClick}
                    onEditSubmit={this.handleEditSubmit}
                />
                <AddForm onClick={this.handleAddClick}
                         onSubmit={this.handleAddSubmit}
                         isInsertForm={this.state.group_title_form} />
            </div>
        )
    }
}

export default Board