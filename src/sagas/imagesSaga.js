import { takeEvery, call, put, select } from 'redux-saga/effects'
import { IMAGES } from "../constatns";
import { fetchImages } from "../api";
import {setImages, setImageError} from "../actions";

const getPage = state => state.nextPage;

function* handleImagesLoadSaga() {
    try {
        const page = yield select(getPage);
        const images = yield call(fetchImages, page);
        yield put(setImages(images))
    } catch (error) {
        yield put(setImageError(error.toString()))
    }
}

export default function* watchImagesLoad() {
    yield takeEvery(IMAGES.LOAD, handleImagesLoadSaga)
}

