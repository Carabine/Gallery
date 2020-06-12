import axios from 'axios'

export const FETCH_IMAGES_REQUEST = 'FETCH_IMAGES_REQUEST'
export const FETCH_IMAGES_SUCCESS = 'FETCH_IMAGES_SUCCESS'
export const FETCH_IMAGES_FAILED = 'FETCH_IMAGES_FAILED'

const fetchImagesFailed = () => ({type: FETCH_IMAGES_FAILED})
const fetchImagesSuccess = (data) => ({type: FETCH_IMAGES_SUCCESS, data})
const fetchImagesRequest = () => ({type: FETCH_IMAGES_REQUEST})

export const fetchImages = () => async dispatch => {
    dispatch(fetchImagesRequest())

    try {
        const url = 'https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9'
        const res = await axios.get(url)
        dispatch(fetchImagesSuccess(res.data))
    } catch (err) {
        dispatch(fetchImagesFailed())
    }
}

