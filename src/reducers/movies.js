import { ADD_MOVIES, ADD_MOVIES_ERROR, UPDATE_MOVIE, UPDATE_MOVIE_ERROR, LIKE_MOVIE, LIKE_MOVIE_ERROR, DISLIKE_MOVIE, DISLIKE_MOVIE_ERROR, DELETE_MOVIE, DELETE_MOVIE_ERROR} from "../actions/types";

const initialState = {
  movies: [
    {
        id: '1',
        title: 'Oceans 8',
        category: 'Comedy',
        likes: 4,
        dislikes: 1
      }, {
        id: '2',
        title: 'Midnight Sun',
        category: 'Comedy',
        likes: 2,
        dislikes: 0
      }, {
        id: '3',
        title: 'Les indestructibles 2',
        category: 'Animation',
        likes: 3,
        dislikes: 1
      }, {
        id: '4',
        title: 'Sans un bruit',
        category: 'Thriller',
        likes: 6,
        dislikes: 6
      }, {
        id: '5',
        title: 'Creed II',
        category: 'Drame',
        likes: 16,
        dislikes: 2
      }, {
        id: '6',
        title: 'Pulp Fiction',
        category: 'Thriller',
        likes: 11,
        dislikes: 3
      }, {
        id: '7',
        title: 'Pulp Fiction',
        category: 'Thriller',
        likes: 12333,
        dislikes: 32
      }, {
        id: '8',
        title: 'Seven',
        category: 'Thriller',
        likes: 2,
        dislikes: 1
      }, {
        id: '9',
        title: 'Inception',
        category: 'Thriller',
        likes: 2,
        dislikes: 1
      }, {
        id: '10',
        title: 'Gone Girl',
        category: 'Thriller',
        likes: 22,
        dislikes: 12
      },
  ],
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_MOVIES:
      return {
        ...state,
        movies: [...state.movies, payload],
      };
    case ADD_MOVIES_ERROR:
      return {
        ...state,
        error: payload,
      };
      case UPDATE_MOVIE:
        {
          const movieToUpdate = state.movies.find(item => item.id === payload.id);
          if(movieToUpdate){
            movieToUpdate = payload;
            return {
                ...state,
                movies: [...state.movies, movieToUpdate],
              };      
          }
          return {
            ...state
          }
        };
        case UPDATE_MOVIE_ERROR:
          return {
            ...state,
            error: payload,
          };  
          case LIKE_MOVIE:
            {
              const movieToUpdate = state.movies.find(item => item.id === payload);
              movieToUpdate.likes++;
              const newmovies = state.movies.filter(item => { return item.id !== payload});
              newmovies.push(movieToUpdate);
              newmovies.sort((a, b) => a.id - b.id);
            return {
              ...state,
              movies: newmovies,
            };
          }    
        case LIKE_MOVIE_ERROR:
          return {
            ...state,
            error: payload,
          };
          case DISLIKE_MOVIE:
            {
              const movieToUpdate = state.movies.find(item => item.id === payload);
              movieToUpdate.dislikes--;
              const newmovies = state.movies.filter(item => { return item.id !== payload});
              newmovies.push(movieToUpdate)
              newmovies.sort((a, b) => a.id - b.id);
            return {
              ...state,
              movies: newmovies,
            };
          }    
        case DISLIKE_MOVIE_ERROR:
          return {
            ...state,
            error: payload,
          };  
          case DELETE_MOVIE:
            {
              const newmovies = state.movies.filter(item => { return item.id !== payload});
            return {
              ...state,
              movies: newmovies,
            };
          }    
        case DELETE_MOVIE_ERROR:
          return {
            ...state,
            error: payload,
          };  
    default:
      return state;
  }
}
