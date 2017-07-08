import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components'

import NotesList from 'components/Notes'
import { addNote } from 'actions/notesActions';

const PageWrapper = styled.section`
  position: relative;
  padding: 20px;
`

const NoteInput = styled.input`
  width: 100%;
  padding: 20px;
  border: 1px solid #e1e1e1;
  margin: 20px 0;
  outline: 0;
`

export class AddNote extends React.Component {

  render() {
    const { notes, onAddNote } = this.props;
    return (
      <PageWrapper>
        <NotesList notes={notes} />
        <NoteInput onChange={onAddNote} />
      </PageWrapper>
    );
  }
}

AddNote.propTypes = {
  notesStatus: PropTypes.string,
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    note: PropTypes.string
  })),
  onAddNote: PropTypes.func
};

const mapStateToProps = (state) => ({
  notesStatus: state.getIn(['notes','status']),
  notes: state.getIn(['notes','list','data']).toJS()
});

const mapDispatchToProps = (dispatch) => ({
  onAddNote: (event) => dispatch(addNote(event.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddNote);
