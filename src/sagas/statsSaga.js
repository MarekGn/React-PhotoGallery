import { take, call, put, fork } from 'redux-saga/effects'
import { IMAGES } from "../constatns";
import { fetchImageStats } from "../api";
import {loadImagesStats, setImagesStats, setImageStatsError} from "../actions";

function* handleStatsRequestSaga(id) {
    for (let i=0; i<3; i++) {
        try {
            yield put(loadImagesStats(id));
            const response = yield call(fetchImageStats, id);
            yield put(setImagesStats(id, response.downloads.total));
            return true;
        } catch (error) {}
    }
    yield put(setImageStatsError(id));

}

export default function* watchStatsRequest() {
    while (true) {
        const {images} = yield take(IMAGES.LOAD_SUCCESS);
        for (let i=0; i<images.length; i++) {
            yield fork(handleStatsRequestSaga, images[i].id);
        }
    }
}


