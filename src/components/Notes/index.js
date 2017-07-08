import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


import NoteItem from '../../components/NoteItem'

const NotesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const NotesList = ({notes}) =>
      <NotesWrapper>
        {notes.map((note, index) => (<NoteItem key={index} note={note.note} />))}
      </NotesWrapper>

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    note: PropTypes.string
  })),
}

export default NotesList
