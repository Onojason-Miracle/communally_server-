import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Homepage() {
  return (
    <div>
      <Navbar />
      <div className="wrapper">
        <div className="homepage">
            <div className="first-div">
                <div className="sort">
                    <div className="sort-div">Tags</div>
                    <div className="sort-div">Location</div>
                    <div className="sort-div">Dates</div>
                </div>
                <form className="search">
                    <p className="search-ptag">
                    <input type="search" placeholder="search" className="form-control "/>
                    <button className="search-btn">Search</button>
                    </p>
                </form>
                </div>

                <div className="events">
                    <ul>
                        <li>
                          <div className="event-img-div">
                            <img  src="https://res.cloudinary.com/blackgirlmagic/image/upload/v1684366625/ReactShop/plant-based-food-mc-220323-02-273c7b_z6s2co.jpg" alt="event" className="events-img"/>
                          </div>

                         <div className="events-desc-div">
                         <div className="TitleNType">
                            <p className="title">Title</p>
                            <p className="type">Type</p>
                           </div>

                           <div className="desc">
                           very short description very short description very short description very short description...
                           <Link to={"./Homepage.jsx"}>Get Full Details</Link>
                           </div>

                           <div className="costNdate">
                            <p className="cost">$COST</p>
                            <p className="date">date/date/date</p>
                           </div>
                           
                         </div>
                        </li>
                    </ul>
                </div>


                <div className="events">
                    <ul>
                        <li>
                          <div className="event-img-div">
                            <img  src="https://res.cloudinary.com/blackgirlmagic/image/upload/v1684366625/ReactShop/plant-based-food-mc-220323-02-273c7b_z6s2co.jpg" alt="event" className="events-img"/>
                          </div>

                         <div className="events-desc-div">
                         <div className="TitleNType">
                            <p className="title">Title</p>
                            <p className="type">Type</p>
                           </div>

                           <div className="desc">
                           very short description very short description very short description very short description...
                           <Link to={"./Homepage.jsx"}>Get Full Details</Link>
                           </div>

                           <div className="costNdate">
                            <p className="cost">$COST</p>
                            <p className="date">date/date/date</p>
                           </div>
                           
                         </div>
                        </li>
                    </ul>
                </div>


                <div className="events">
                    <ul>
                        <li>
                          <div className="event-img-div">
                            <img  src="https://res.cloudinary.com/blackgirlmagic/image/upload/v1684366625/ReactShop/plant-based-food-mc-220323-02-273c7b_z6s2co.jpg" alt="event" className="events-img"/>
                          </div>

                         <div className="events-desc-div">
                         <div className="TitleNType">
                            <p className="title">Title</p>
                            <p className="type">Type</p>
                           </div>

                           <div className="desc">
                           very short description very short description very short description very short description...
                           <Link to={"./Homepage.jsx"}>Get Full Details</Link>
                           </div>

                           <div className="costNdate">
                            <p className="cost">$COST</p>
                            <p className="date">date/date/date</p>
                           </div>
                           
                         </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
   
  );
}

export default Homepage;
