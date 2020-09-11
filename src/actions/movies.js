import { ADD_MOVIES, ADD_MOVIES_ERROR, LIKE_MOVIE, LIKE_MOVIE_ERROR, DISLIKE_MOVIE, DISLIKE_MOVIE_ERROR, DELETE_MOVIE, DELETE_MOVIE_ERROR } from "../actions/types";

export const addMovies = (movie) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_MOVIES,
      payload: movie,
    });
  } catch (err) {
    dispatch({
      type: ADD_MOVIES_ERROR,
      payload: err,
    });
  }
};

export const deleteMovies = (movie) => async (dispatch) => {
    try {
      dispatch({
        type: DELETE_MOVIE,
        payload: movie,
      });
    } catch (err) {
      dispatch({
        type: DELETE_MOVIE_ERROR,
        payload: err,
      });
    }
  };

  export const likeMovies = (movie) => async (dispatch) => {
    try {
      dispatch({
        type: LIKE_MOVIE,
        payload: movie,
      });
    } catch (err) {
      dispatch({
        type: LIKE_MOVIE_ERROR,
        payload: err,
      });
    }
  };

  export const disLikeMovies = (movie) => async (dispatch) => {
    if(movie){
        dispatch({
            type: DISLIKE_MOVIE,
            payload: movie,
          });     
    }  
    else{
        dispatch({
            type: DISLIKE_MOVIE_ERROR,
            payload: movie,
          });    
    }
  };