/* eslint import/first: 0 */

// ultimately each of these imports should be in separate files
import bountiesReducer from 'public-modules/Bounties';
import leaderboardReducer from 'public-modules/Leaderboard';
import userInfoReducer from 'public-modules/UserInfo';
import statsReducer from 'public-modules/Stats';
import categoriesReducer from 'public-modules/Categories';
import authenticationReducer from 'public-modules/Authentication';

export const reducers = {
  bounties: bountiesReducer,
  leaderboard: leaderboardReducer,
  userInfo: userInfoReducer,
  stats: statsReducer,
  categories: categoriesReducer,
  authentication: authenticationReducer
};

import bountiesSagas from 'public-modules/Bounties/sagas';
import leaderboardSagas from 'public-modules/Leaderboard/sagas';
import userInfoSagas from 'public-modules/UserInfo/sagas';
import statsSagas from 'public-modules/Stats/sagas';
import categoriesSagas from 'public-modules/Categories/sagas';
import authentiactionSagas from 'public-modules/Authentication/sagas';

export const sagaWatchers = [
  ...leaderboardSagas,
  ...bountiesSagas,
  ...userInfoSagas,
  ...statsSagas,
  ...categoriesSagas,
  ...authentiactionSagas
];

import * as namedBountiesSagas from 'public-modules/Bounties/sagas';
import * as namedLeaderboardSagas from 'public-modules/Leaderboard/sagas';
import * as namedUserInfoSagas from 'public-modules/UserInfo/sagas';
import * as namedStatsSagas from 'public-modules/Stats/sagas';
import * as namedCategoriesSagas from 'public-modules/Categories/sagas';
import * as namedAuthenticationSagas from 'public-modules/Authentication/sagas';

export const sagas = {
  ...namedLeaderboardSagas,
  ...namedBountiesSagas,
  ...namedUserInfoSagas,
  ...namedStatsSagas,
  ...namedCategoriesSagas,
  namedAuthenticationSagas
};

import { actions as bountyActions } from 'public-modules/Bounties';
import { actions as leaderboardActions } from 'public-modules/Leaderboard';
import { actions as userInfoActions } from 'public-modules/UserInfo';
import { actions as statsActions } from 'public-modules/Stats';
import { actions as categoriesActions } from 'public-modules/Categories';
import { actions as authenticationActions } from 'public-modules/Authentication';

export const actions = {
  ...leaderboardActions,
  ...bountyActions,
  ...userInfoActions,
  ...statsActions,
  ...categoriesActions,
  ...authenticationActions
};

import { actionTypes as bountyActionTypes } from 'public-modules/Bounties';
import { actionTypes as leaderboardActionTypes } from 'public-modules/Leaderboard';
import { actionTypes as userInfoActionTypes } from 'public-modules/UserInfo';
import { actionTypes as statsActionTypes } from 'public-modules/Stats';
import { actionTypes as categoriesActionTypes } from 'public-modules/Categories';
import { actionTypes as authenticationActionTypes } from 'public-modules/Authentication';

export const actionTypes = {
  ...leaderboardActionTypes,
  ...bountyActionTypes,
  ...userInfoActionTypes,
  ...statsActionTypes,
  ...categoriesActionTypes,
  ...authenticationActionTypes
};

import * as bountiesSelectors from 'public-modules/Bounties/selectors';
import * as leaderboardSelectors from 'public-modules/Leaderboard/selectors';
import * as userInfoSelectors from 'public-modules/UserInfo/selectors';
import * as statsSelectors from 'public-modules/Stats/selectors';
import * as categoriesSelectors from 'public-modules/Categories/selectors';
import * as authenticationSelectors from 'public-modules/Authentication/selectors';

export const selectors = {
  ...leaderboardSelectors,
  ...bountiesSelectors,
  ...userInfoSelectors,
  ...statsSelectors,
  ...categoriesSelectors,
  ...authenticationSelectors
};
