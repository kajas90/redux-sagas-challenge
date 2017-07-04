import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class AddNote extends React.Component {
  render() {
    const { notesStatus } = this.props;
    return (
      <div> Status: {notesStatus}</div>
    );
  }
}

AddNote.propTypes = {
  notesStatus: PropTypes.string
};

const mapStateToProps = (state) => ({
  notesStatus: state.getIn(['notes','status'])
});

export default connect(mapStateToProps)(AddNote);
