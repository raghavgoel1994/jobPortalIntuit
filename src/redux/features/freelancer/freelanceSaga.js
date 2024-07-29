import { toast } from "react-toastify";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  getAppliedJobFromUserIdApi,
  getFreelancerApi,
  getGitHubReposApi,
  getJobsApi,
  patchFreelancerApi,
  postApplicationApi,
} from "../../../service/freelanceService";
import { loginSuccess } from "../auth/authSlice";
import {
  getFreelancer,
  getFreelancerFailure,
  getFreelancerSuccess,
  getGithubRepos,
  getGithubReposFailure,
  getGithubReposSuccess,
  getJobs,
  getJobsFailure,
  getJobsFromUserId,
  getJobsFromUserIdFailure,
  getJobsFromUserIdSuccess,
  getJobsSuccess,
  postApplication,
  postApplicationFailure,
  postApplicationSuccess,
  saveSkills,
  saveSkillsFailure,
  saveSkillsSuccess,
} from "./freelanceSlice";

function* saveSkillsSage(action) {
  try {
    const user = yield call(patchFreelancerApi, action.payload);
    if (user?.email) {
      yield put(loginSuccess(user));
      yield put(saveSkillsSuccess());
      if (action.payload?.github) {
        yield put(getGithubRepos(action.payload));
      }
      toast.success("Profile updated successfully");
    } else {
      yield put(saveSkillsFailure("Save Skills Failed"));
      toast.error("Profile update Failed");
    }
  } catch (error) {
    yield put(saveSkillsFailure("Save Skills Failed"));
    toast.error("Profile update Failed");
  }
}

function* getFreelancerSaga(action) {
  try {
    const user = yield call(getFreelancerApi, action.payload);
    if (user?.email) {
      yield put(getFreelancerSuccess(user));
      if (user.github) {
        yield put(getGithubRepos({ github: user.github }));
      }
    } else {
      yield put(getFreelancerFailure("getFreelancerSaga Failed"));
    }
  } catch (error) {
    yield put(getFreelancerFailure("getFreelancerSaga Failed"));
  }
}

function* getGithubProfile(action) {
  try {
    const repos = yield call(getGitHubReposApi, action.payload);
    if (repos) {
      yield put(getGithubReposSuccess(repos));
    } else {
      yield put(getGithubReposFailure("Github profile fetch Failed"));
    }
  } catch (error) {
    yield put(getGithubReposFailure("Github profile fetch Failed"));
  }
}

function* getJobsSaga(action) {
  try {
    let hasMore = false;
    const jobs = yield call(getJobsApi, action.payload);
    if (jobs) {
      if (jobs.length === 10) {
        hasMore = true;
      }
      yield put(
        getJobsSuccess({ jobs, hasMore, page: action.payload.page || 1 })
      );
    } else {
      yield put(getJobsFailure("Jobs fetch Failed"));
    }
  } catch (error) {
    yield put(getJobsFailure("Jobs fetch Failed"));
  }
}

function* postJobApplicationSaga(action) {
  try {
    const jobs = yield call(postApplicationApi, action.payload);
    if (jobs) {
      yield put(postApplicationSuccess());
      toast.success("Job Application submitted Successfully");
      yield put(
        getJobsFromUserId({ freelancerId: action.payload.freelancerId })
      );
    } else {
      yield put(postApplicationFailure("Application Post Failed"));
      toast.error("Job Application Failed");
    }
  } catch (error) {
    yield put(getJobsFailure("Application Post Failed"));
    toast.error("Job Application Failed");
  }
}

function* getJobApplicationSaga(action) {
  try {
    const jobs = yield call(getAppliedJobFromUserIdApi, action.payload);
    if (jobs) {
      let listOfJobId = jobs.map((item) => item.jobId) || [];
      yield put(getJobsFromUserIdSuccess(listOfJobId));
    } else {
      yield put(getJobsFromUserIdFailure("Get JobApplicationSaga Failed"));
    }
  } catch (error) {
    yield put(getJobsFromUserIdFailure("Get JobApplicationSaga Failed"));
  }
}

export function* watchFreelancerSagas() {
  yield takeLatest(saveSkills.type, saveSkillsSage);
  yield takeLatest(getGithubRepos.type, getGithubProfile);
  yield takeLatest(getJobs.type, getJobsSaga);
  yield takeLatest(postApplication.type, postJobApplicationSaga);
  yield takeLatest(getJobsFromUserId.type, getJobApplicationSaga);
  yield takeLatest(getFreelancer.type, getFreelancerSaga);
}
