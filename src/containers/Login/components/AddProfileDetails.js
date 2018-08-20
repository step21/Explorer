import React from 'react';
import PropTypes from 'prop-types';
import styles from './baseStyles.module.scss';
import UserSettings from 'containers/Settings/UserSettings';
import { Modal, Text, Button } from 'components';
import { PageCard } from 'explorer-components';
import { actions } from '../reducer';

class AddProfileDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isFormVisible: false };
  }

  showForm = () => {
    this.setState({ isFormVisible: true });
  };

  onClose = () => {
    this.setState({ isFormVisible: false });
    this.props.onClose();
  };

  render() {
    const { visible } = this.props;
    const { isFormVisible } = this.state;

    if (isFormVisible) {
      return (
        <Modal
          visible={visible}
          size="large"
          dismissable
          onClose={this.onClose}
        >
          <Modal.Header closable icon={['fal', 'id-card-alt']}>
            <Modal.Heading>Profile Details</Modal.Heading>
          </Modal.Header>
          <Modal.Body>
            <div className="container-fluid">
              <div className="row center-xs">
                <div className="col-xs-5">
                  Add some profile details about yourself, so that others on the
                  platform have an idea of your background and skillset, and can
                  find you elsewhere online.
                </div>
              </div>
            </div>

            <div className="container-fluid">
              <PageCard.Break />
              <div className={styles.alignLeft}>
                <UserSettings />
              </div>
            </div>
          </Modal.Body>
        </Modal>
      );
    }

    return (
      <Modal visible={visible} size="small" dismissable onClose={this.onClose}>
        <Modal.Header closable icon={['fal', 'id-card-alt']}>
          <Modal.Heading>Profile Details</Modal.Heading>
        </Modal.Header>
        <Modal.Body>
          <Text>
            Welcome to the Bounties Network! We&#39;re excited to see what you
            bounty.
            <br />
            <br />
            Before you get started, we encourage you to add some profile details
            about yourself, so that others on the platform have an idea of your
            background and skillset.
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button type="" onClick={this.onClose} margin>
            Skip
          </Button>
          <Button type="primary" onClick={this.showForm}>
            Add profile details
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

AddProfileDetails.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func
};

export default AddProfileDetails;