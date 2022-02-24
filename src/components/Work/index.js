import React from 'react';
import bookSearch from "../../assets/images/Book Search.png";
import covidTracker from "../../assets/images/COVID-19 TRACKER.png";

function Work() {
    return(
        <div class="index, section">
        <h2>Work</h2>
        <img src={bookSearch} class="work-image" alt="Book Search" />
        <p>
               
            <a href="https://github.com/MarcosManresa/08-Interactive-Project" id="projects">Book search engine</a><br/>
            An interactive book search engine that allows you to look at the current New York Times best selling list.
        </p>
        <br></br>
        <img src={covidTracker} class="work-image" alt="Covid Tracker" />
        <p>
            <a href="https://quiet-badlands-14441.herokuapp.com/" id="projects">COVID-19 TRACKER</a><br/>
            An application that states the current covid cases depending on what state is searched.
        </p>
     </div>  
    );
}

export default Work;