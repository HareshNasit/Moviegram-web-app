// import all react libraries
import React from "react";
import { Button, Form } from "react-bootstrap";
import ReactSearchBox from 'react-search-box'
// import all stylesheets
import "./styles.css";
import "./../universalStyles.css"
// import all needed Components
import MainMenuBar from './../MainMenuBar';
import ReviewsList from './../ReviewsList';
import profileimgdef from './../MainMenuBar/profile.png';
import SearchBar from "../SearchBar";
// import functions for backend stuff
import { getAllReviews,getUser,getMyNewsFeed } from './../../services/api'
// import constants file which carries user data
const constants = require("../../constants")

// Class for the Reviews News Feed Component
class NewsFeedScreen extends React.Component {

  // Constructor function that stores the react STATE variable that holds dynamically changing data. Constructor
  // used to bind the used methods to this class.
  constructor(props) {
    super(props);
    this.state = {searched: "",
                  reviews: []
                   // username: "",
                   // auth: false
                 };
    this.searchChange = this.searchChange.bind(this);
    this.handleEvent = this.handleEvent.bind(this)
    this.currUser = constants.acc.username;
    this.data = [{key: 'dangal',value: 'Dangal',}, {key: 'avengers endgame',value: 'Avengers: Endgame',},
                 {key: 'mission impossible 5',value: 'Mission Impossible 5',},{key: 'interstellar',value: 'Interstellar',},
                 {key: 'fate of the furious',value: 'Fate of The Furious',},]

  }

  async componentDidMount() {
    const data = await getAllReviews();
    console.log(data.data)
    this.setState({reviews: data.data})
    console.log(getUser(this.props.location.state.username))
    console.log(getMyNewsFeed(this.props.location.state.username))
  }

  // const {given_username, is_auth} = this.props.location.state

  // this.setState({username: given_username, auth: is_auth})
  // function used to change the value of this.state.searched to store the searchBar query entered by user
  searchChange(event) {
    this.setState({searched:event.target.value})
    console.log(event.target.value)
  }

  // Function that handles input in search bar
  handleEvent(movie) {
    console.log(movie);
    window.location.href = "/movie/" + movie;
  }

  render() {
    const username = this.props.location.state.username;
    console.log(username)
    // const auth = this.props.location.state.auth;
    return (
      <div id="pageFeed">

        {/*The menu bar is just reused from the Component MainMenuBar */}
        <MainMenuBar username={username}/>

        {/*Form that takes in the input of users to search movies and reviews of movies */}
        <div className="searchMovieform">
          <SearchBar/>
        </div>

        {/*Title of the review news feed page */}
        <div className="pageHeader">
         <h3 className="headerText">Reviews Feed</h3>
        </div>

        {/* Reviews List here to display all reviews from friends of current user */}
        <ReviewsList reviews={this.state.reviews}
                     queueComponent={this}
                     authenticateduser= {username}/>

      </div>
    );
  }
}

export default NewsFeedScreen;
