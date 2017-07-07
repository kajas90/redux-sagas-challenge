import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { connect } from 'react-redux';

import { toJS } from 'immutable';

import { getNotes } from '../../actions/notesActions'

import NoteItem from '../../components/NoteItem'

const NotesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
`

export class Notes extends React.Component {

  componentDidMount() {
    this.props.requestNotes();
  }

  render() {
    const { notesStatus, notes } = this.props;
    return (
      <NotesWrapper>
        <h2>Status: {notesStatus}</h2>
        {notes.map((note) => (<NoteItem key={note.id} note={note.note} />))}
      </NotesWrapper>
    );
  }
}

Notes.propTypes = {
  notesStatus: PropTypes.string,
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    note: PropTypes.string
  })),
  requestNotes: PropTypes.func
};

const mapStateToProps = (state) => ({
  notesStatus: state.getIn(['notes','list','status']),
  notes: state.getIn(['notes','list','data']).toJS()
});

const mapDispatchToProps = (dispatch) => ({
  requestNotes: () => dispatch(getNotes())
})

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
