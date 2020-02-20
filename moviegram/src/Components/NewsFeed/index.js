import React from "react";
import "./styles.css";

import { Button, Form } from "react-bootstrap";

import MainMenuBar from './../MainMenuBar';
import Review from './../Review';

class NewsFeedScreen extends React.Component {

  state = {
    currUser: "",
    reviews: [{ username: "Bhavya" , movieName: "Avengers" ,
                reviewContent: "This movie is lit, and I mean lit af. My god what an awesome time I had and it was even more fun because I watched it with my close friends which made the experience amazing. 15/10 stars. Definitely go watch it pleaseeeeeeeee!!!!!!!!!!!" ,
                commentsSection: "Comments section Component goes here" },
                { username: "Harsh" , movieName: "Messi Rocks" ,
                  reviewContent: "I think this movie is better than any movie ever made about any footballer or any movie that will be made about any footballer because Messi by far is the GOAT football player to ever live and anyone who disagrees and says Ronaldo is the best is RIGHT cause messi sucks HaHaHa tricked you there didn't I." ,
                  commentsSection: "Comments section Component goes here" },
                { username: "Dhruv" , movieName: "Dangal" ,
                  reviewContent: "Ab toh dangal hoga dangal bhenchooodddddd !!!!!!" ,
                  commentsSection: "Comments section Component goes here" },
                { username: "Yosef" , movieName: "Stalingrad" ,
                  reviewContent: "Thomas Kretschmann is the best actor I have ever witnessed in my whole damn life and man is he hot." ,
                  commentsSection: "Comments section Component goes here" }]
  };

  render() {
    return (
      <div className="pageFeed">

        {/*The menu bar is just reused from the Component MainMenuBar */}
        <MainMenuBar/>

        <Form className="searchMovieform">
          <Form.Group>
            <Form.Control type="searchMovie" placeholder="Search Movies/Reviews" />
          </Form.Group>
        </Form>

        <div className="pageHeader">
         <h3 className="headerText">Reviews Feed</h3>
        </div>

<<<<<<< HEAD
        <Review username='Bhavya'
                movieName='Avengers'
                reviewContent='This movie is lit, and I mean lit af. My god what an awesome time I had and it was even more fun because I watched it with my close friends which made the experience amazing. 15/10 stars. Definitely go watch it pleaseeeeeeeee!!!!!!!!!!!'
                commentsSection='Comments section Component goes here'/>
        <Review username='Harsh'
                movieName='Messi Rocks'
                reviewContent="I think this movie is better than any movie ever made about any footballer or any movie that will be made about any footballer because Messi by far is the GOAT football player to ever live and anyone who disagrees and says Ronaldo is the best is RIGHT cause messi sucks HaHaHa tricked you there didn't I."
                commentsSection='Comments section Component goes here'/>
        <Review username='Dhruv'
                movieName='Dangal'
                reviewContent="Ab toh dangal hoga dangal bhenchooodddddd !!!!!!"
                commentsSection='Comments section Component goes here'/>
        <Review username='Yosef'
                movieName='Stalingrad'
                reviewContent="Thomas Kretschmann is the best actor I have ever witnessed in my whole damn life and man is he hot."
                commentsSection='Comments section Component goes here'/>
=======
        {this.state.reviews.map(review => (
          <Review username={review.username}
                  movieName={review.movieName}
                  reviewContent={review.reviewContent}
                  commentsSection={review.commentsSection}/>
        ))}

>>>>>>> fa7302251e36cc12ccc534ba80fe205f097ebfc6
      </div>
    );
  }
}

export default NewsFeedScreen;
