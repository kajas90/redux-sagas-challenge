import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const NoteWrapper = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #dedede;
  width: 100%;
`

const NoteItem = ({note}) => <NoteWrapper>{note}</NoteWrapper>

NoteItem.propTypes = {
  note: PropTypes.string
}

export default NoteItem
