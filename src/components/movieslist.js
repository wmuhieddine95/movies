// , deleteMovie, likeMovie, disLikeMovie
import {likeMovies, disLikeMovies, deleteMovies} from "../actions/movies";
import {connect} from 'react-redux'
import React from 'react'
import { Grid, Button, Icon, Label, Card, CardContent, CardDescription, CardHeader, Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
const MoviesList = ({movies, selection, view, deleteMovies, likeMovies, disLikeMovies}) => {
    const handleDisLike = (e, id) => {
        const movieId = id + "";
        console.log(id)
        disLikeMovies(movieId)
    }
    const handleLike = (e, id) => {
        const movieId = id + "";
        likeMovies(movieId)
    }
    const handleDelete = (e, id) => {
        const movieId = id + "";
        deleteMovies(movieId)
    }
    const list = movies.map((movie, index) => {
            if(index < (selection*view)){
                return(
                    <Grid.Column key={movie.id} width={4}>
                    <Card>
                        <CardContent>
                            <CardHeader>
                                {movie.title}
                            </CardHeader>
                            <Button onClick={(e) => handleDisLike(e, movie.id)}>
                            <Icon name='thumbs down' />
                                Dislike
                            <Label>
                                {movie.dislikes}
                            </Label>
                        </Button>
                        <Button icon onClick={(e) => handleLike(e, movie.id)}>
                            <Icon name='thumbs up'/>
                            Like
                            <Label>
                                {movie.likes}
                            </Label>
                        </Button>
                        </CardContent>
                        <CardDescription>
                            Category: {movie.category}
                        </CardDescription>
                        <Button onClick={(e) => handleDelete(e, movie.id)}>
                        Delete
                    </Button>
                    </Card>
                    </Grid.Column>
                )     
            }    
        }
    );
const exist = movies ? (true) : (false)
return(
<div>
    {exist ? (
        <Grid>
            {list}    
        </Grid>
        )
       : (<p>
        No Movies
        </p>)
    } 
</div>
);
}

const mapStateToProps = (state) => {
    return {
      movies: state.movies.movies
    };
  };
  
export default connect(mapStateToProps , {likeMovies, deleteMovies, disLikeMovies})(MoviesList);
