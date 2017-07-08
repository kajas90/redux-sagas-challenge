import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { connect } from 'react-redux';

import { toJS } from 'immutable';

import { getNotes } from 'actions/notesActions';
import NotesList from 'components/Notes';

const PageWrapper = styled.section`
  position: relative;
  padding: 20px;
`

const Loader = styled.div `
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #fff;
  
  & > span {
    animation: blinker 1s linear infinite;
  }
  
  @keyframes blinker {  
    50% { opacity: 0; }
  }
`

export class Notes extends React.Component {

  componentDidMount() {
    this.props.requestNotes();
  }

  render() {
    const { notesStatus, notes } = this.props;
    return (
      <PageWrapper>
        <NotesList notes={notes} />
        {notesStatus === 'loading' && <Loader><span>{notesStatus}</span></Loader>}
      </PageWrapper>
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
