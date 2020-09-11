import React, {useState} from 'react';
import './App.css';
import {likeMovies, disLikeMovies, deleteMovies} from "./actions/movies";
import {connect} from "react-redux"
import MoviesList from "./components/movieslist"
import { Button, Grid, GridRow, Menu, Select, Dropdown } from 'semantic-ui-react';
const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies
  };
};

const categories = [
  { key: 'Animation', value: 'Animation', text: 'Animation' },
  { key: 'Thriller', value: 'Thriller', text: 'Thriller' },
  { key: 'Drame', value: 'Drame', text: 'Drame' },
  { key: 'Comedy', value: 'Comedy', text: 'Comedy' },
]

function App({movies}) {
  const [selection, setSelection] = useState(1);
  const handleLeft = () => {
    if(selection > 1)
    setSelection(selection - 1);
  }
  const handleRight = () => {
    if(selection<3)
    setSelection(selection + 1);
  } 

  const [view, setView] = useState(4);
  const handleClick1 = ()=> {
      setView(4)
  }
  const handleClick2 = ()=> {
      setView(8)
  }
  const handleClick3 = ()=> {
      setView(12)
  }

  const handleCategory = (e)=>{
    console.log(e)
  }
  return (
    <div className="App">
      <Menu>
        <Menu.Item icon="Menu layout" onClick={handleClick1}>
                4
        </Menu.Item>
        <Menu.Item icon="Menu layout" onClick={handleClick2}>
                8
        </Menu.Item>
        <Menu.Item icon="Menu layout" onClick={handleClick3}>
                12
        </Menu.Item>
        <Dropdown placeholder='Select Category' options={categories} multiple onChange={(e) => handleCategory(e)}/>              
    </Menu>
      
      <MoviesList movies={movies} selection={selection > 0 ? (selection) : (0)} view={view > 4 ? (view) : (4) }/>
      {/* deleteMovie={deleteMovies} likeMovie={likeMovies} disLikeMovie={disLikeMovies}/> */}
      <Grid centered>
        <GridRow>
        <Button icon='angle left' onClick={handleLeft}/>
        <Button icon='angle right' onClick={handleRight}/>
        </GridRow>
      </Grid>
    </div>
  );
}
export default connect(mapStateToProps , {likeMovies, deleteMovies, disLikeMovies})(App);
