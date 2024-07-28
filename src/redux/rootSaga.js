import { all } from "redux-saga/effects";
import { watchAuthSagas } from "./features/auth/authSaga";
import { watchEmployerSagas } from "./features/employer/employerSaga";
import { watchFreelancerSagas } from "./features/freelancer/freelanceSaga";

export default function* rootSaga() {
  yield all([watchAuthSagas(), watchFreelancerSagas(), watchEmployerSagas()]);
}
