import { toast } from "react-toastify";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  getApplicationsByJobIdApi,
  getPostedByEmployerIdApi,
  postJobApi,
} from "../../../service/employerService";
import {
  getApplicationsByJobId,
  getApplicationsByJobIdFailure,
  getApplicationsByJobIdSuccess,
  getPostedByEmployerId,
  getPostedByEmployerIdFailure,
  getPostedByEmployerIdSuccess,
  postJob,
  postJobFailure,
  postJobSuccess,
} from "./employerSlice";

function* getApplicationsByJobIdSaga(action) {
  try {
    const applications = yield call(getApplicationsByJobIdApi, action.payload);
    if (applications) {
      let response = {
        [action.payload.jobId]: {
          freelancer: applications.map((app) => app.freelancer) || [],
        },
      };
      yield put(getApplicationsByJobIdSuccess(response));
    } else {
      yield put(
        getApplicationsByJobIdFailure("getApplicationsByJobIdSaga fetch Failed")
      );
    }
  } catch (error) {
    yield put(
      getApplicationsByJobIdFailure("getApplicationsByJobIdSaga fetch Failed")
    );
  }
}

function* getPostedByEmployerIdSaga(action) {
  try {
    const jobs = yield call(getPostedByEmployerIdApi, action.payload);
    if (jobs) {
      yield put(getPostedByEmployerIdSuccess(jobs));
    } else {
      yield put(
        getPostedByEmployerIdFailure("getPostedByEmployerIdFailure Failed")
      );
    }
  } catch (error) {
    yield put(
      getPostedByEmployerIdFailure("getPostedByEmployerIdFailure Failed")
    );
  }
}

function* postJobSaga(action) {
  try {
    const jobs = yield call(postJobApi, action.payload);
    if (jobs) {
      yield put(postJobSuccess(jobs));
      toast.success("Job posted successfully");
    } else {
      yield put(postJobFailure("postJobSaga Failed"));
      toast.success("Job post Failed");
    }
  } catch (error) {
    yield put(postJobFailure("postJobSaga Failed"));
    toast.success("Job post Failed");
  }
}

export function* watchEmployerSagas() {
  yield takeLatest(getApplicationsByJobId.type, getApplicationsByJobIdSaga);
  yield takeLatest(getPostedByEmployerId.type, getPostedByEmployerIdSaga);
  yield takeLatest(postJob.type, postJobSaga);
}
