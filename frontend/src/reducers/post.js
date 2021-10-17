import { GET_POSTS, POST_ERROR, UPDATE_LIKES } from '../actions/constants';

const initialState = {
	posts: [],
	post: null,
	loading: true,
	error: {},
};

export default function posts(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case GET_POSTS:
			return {
				...state,
				posts: payload,
				loading: false,
			};
		case UPDATE_LIKES:
			return {
				...state,
				posts: state.posts.map((post) =>
					post._id === payload.id ? { ...post, likes: payload.likes } : post
				),
				loading: false,
			};
		case POST_ERROR:
			return {
				...state,
				error: payload,
				loading: false,
			};

		default:
			return state;
	}
}