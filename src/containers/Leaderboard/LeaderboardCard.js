import React from 'react';
import styles from './LeaderboardCard.module.scss';
import { compose } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import { ListGroup, Card, Text, Loader, ZeroState, Button } from 'components';
import { LoadComponent } from 'hocs';
import { LeaderItem } from './components';
import { map as fpMap } from 'lodash';
import { rootLeaderboardSelector } from 'public-modules/Leaderboard/selectors';
import { rootLeaderboardUISelector } from './selectors';
import { actions } from 'public-modules/Leaderboard';
import { LIMIT } from 'public-modules/Leaderboard/constants';

const map = fpMap.convert({ cap: false });

const LeaderboardCardComponent = props => {
  const {
    leaderboard,
    loading,
    error,
    toggleValue,
    count,
    loadMore,
    loadingMore,
    loadingMoreError
  } = props;

  const leaders = leaderboard[toggleValue] || [];

  const renderLeaders = () => {
    return map((leader, index) => {
      const { name, address, profile_image, total, total_usd } = leader;

      return (
        <ListGroup.ListItem hover>
          <LeaderItem
            key={index + 1}
            place={index + 1}
            img={profile_image}
            name={name}
            address={address}
            usd={Number(total_usd).toFixed(2)}
          />
        </ListGroup.ListItem>
      );
    }, leaders);
  };

  let cardBodyClass;
  if (loading || leaders.length === 0) {
    cardBodyClass = styles.cardBodyLoading;
  }

  let cardBody = (
    <div className={cardBodyClass}>
      <ListGroup>{renderLeaders()}</ListGroup>

      {leaderboard[toggleValue].length < count[toggleValue] ? (
        <div className={styles.loadMoreButton}>
          <Button loading={loadingMore} onClick={loadMore}>
            Load More
          </Button>
        </div>
      ) : null}
    </div>
  );

  if (leaders.length === 0) {
    cardBody = (
      <ZeroState
        iconColor="blue"
        title="No Results Yet"
        text="As bounties are issues and submissions are completed, this leaderboard will begin to populate"
        icon={['fal', 'bolt']}
      />
    );
  }

  if (loading) {
    cardBody = <Loader color="blue" size="medium" />;
  }

  if (error || loadingMoreError) {
    cardBody = (
      <ZeroState
        type="error"
        iconColor="white"
        title="Uh oh, something happened"
        text="Try to refresh the page and try again"
        icon={['fal', 'exclamation-triangle']}
      />
    );
  }

  return <div className={cardBodyClass}>{cardBody}</div>;
};

const mapStateToProps = state => {
  const leaderboardState = rootLeaderboardSelector(state);
  const leaderboardUIState = rootLeaderboardUISelector(state);

  return {
    offset: leaderboardState.offset,
    count: leaderboardState.count,
    leaderboard: leaderboardState.leaderboard,
    loading: leaderboardState.loading,
    error: leaderboardState.error,
    loadingMore: leaderboardState.loadingMore,
    toggleValue: leaderboardUIState.toggleValue,
    key: leaderboardUIState.toggleValue
  };
};

const LeaderboardCard = compose(
  connect(
    mapStateToProps,
    {
      load: actions.loadLeaderboard,
      loadMore: actions.loadMoreLeaderboard
    }
  ),
  LoadComponent('')
)(LeaderboardCardComponent);

export default LeaderboardCard;