import { toast } from "react-toastify";
import { call, put, takeLatest } from "redux-saga/effects";
import { getNavigate } from "../../../utils/history";
import { login as loginApi } from "./../../../service/authService";
import { login, loginError, loginSuccess } from "./authSlice";

function* loginSaga(action) {
  try {
    const user = yield call(loginApi, action.payload);
    if (user?.[0]?.email) {
      yield put(loginSuccess(user?.[0]));
      const navi = getNavigate();
      if (user[0].role === "employer") {
        navi("/employer/postedJobs");
      } else {
        navi("/freelancer/jobs");
      }
      toast.success("Login successfully!");
    } else {
      yield put(loginError("Invalid username & password"));
      toast.error("Invalid username & password!");
    }
  } catch (error) {
    yield put(loginError("Login Failed"));
    toast.error("Login Failed!");
    console.error("Login failed", error);
  }
}

export function* watchAuthSagas() {
  yield takeLatest(login.type, loginSaga);
}
