import request from 'utils/request';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { toLower } from 'lodash';
import { actionTypes, actions } from 'public-modules/Drafts';
import { addressSelector } from 'public-modules/Client/selectors';
import { draftsSelector } from './selectors';
import { LIMIT } from './constants';

const { LOAD_DRAFTS, LOAD_MORE_DRAFTS } = actionTypes;
const {
  loadDraftsSuccess,
  loadDraftsFail,
  loadMoreDraftsSuccess,
  loadMoreDraftsFail
} = actions;

export function* loadDrafts(action) {
  const address = yield select(addressSelector);

  try {
    const endpoint = `bounty/draft/?issuer=${toLower(address)}&limit=${LIMIT}`;
    const drafts = yield call(request, endpoint, 'GET');
    yield put(loadDraftsSuccess(drafts));
  } catch (e) {
    yield put(loadDraftsFail(e));
  }
}

export function* loadMoreDrafts(action) {
  const drafts_list = yield select(draftsSelector);
  const offset = drafts_list.length;

  try {
    const endpoint = 'bounty/draft';
    const drafts = yield call(request, endpoint, 'GET', {
      params: { limit: LIMIT, offset }
    });
    yield put(loadMoreDraftsSuccess(drafts));
  } catch (e) {
    yield put(loadMoreDraftsFail(e));
  }
}

export function* watchDrafts() {
  yield takeLatest(LOAD_DRAFTS, loadDrafts);
}

export function* watchLoadMoreDrafts() {
  yield takeLatest(LOAD_MORE_DRAFTS, loadMoreDrafts);
}

export default [watchDrafts, watchLoadMoreDrafts];