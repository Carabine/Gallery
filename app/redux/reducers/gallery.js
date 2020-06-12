import {FETCH_IMAGES_FAILED, FETCH_IMAGES_REQUEST, FETCH_IMAGES_SUCCESS} from '../actions/gallery';

const initialState = {
    isFetching: false,
    imagesData: []
}

export const GalleryReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_IMAGES_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_IMAGES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                imagesData: action.data

            }
        case FETCH_IMAGES_FAILED:
            return {
                ...state,
                isFetching: false
            }
        default:
            return state
    }
}
