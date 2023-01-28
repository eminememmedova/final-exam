import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./index.css";

import { Autoplay, Pagination, Navigation } from "swiper";

const Home = () => {
  const [data, setData] = useState(null);
  const URL = "http://localhost:3030/product/";
  useEffect(() => {
    axios.get(URL).then((res) => setData(res.data));
  }, []);
  const deleteData = (id) => {
    console.log(id);
    axios.delete(`${URL}${id}`);
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl4.jpg"
            alt=""
          />

          <div className="slidemain">
            <p> Floral</p>
            <h1>Excellent bouquets for you</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl1-967x725.jpg"
            alt=""
          />
          <div className="slidemain">
            <p> Floral</p>
            <h1>Excellent bouquets for you</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl7.jpg"
            alt=""
          />
          <div className="slidemain">
            <p> Fixed-Height Slider</p>
            <h1>Excellent bouquets for you</h1>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="missionContainer">
      <div className="mission">
        <div className="missionLeft">
          <h1>Our Mission</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatem, maiores sequi magni commodi ullam obcaecati, fuga
            nesciunt molestiae quas fugiat laboriosam. Voluptatibus nihil
            veritatis recusandae amet quia et consectetur
          </p>
          <button>Read more</button>
        </div>
        <div className="missionRight">
          <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/b4.jpg" alt="" />
        </div>
      </div>
      </div>
      <div className="data">
 {data?.map((item)=>(
          <div key={data.id} data={item} className="dataCard">
            <img src={item.image} alt="img" />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button
                      onClick={() => deleteData(data._id)}
                      className="delete"
                    >DELETE</button>
          </div>
        ))}
 </div>

      <div className="pricing">
        <div className="flowersPricing"></div>
        <div className="eventsPricingHeader">
          <p>Devoted to wonderful beauty</p>
          <h1>Events Pricing</h1>
        </div>
        <div className="eventsPricing">

          <div className="eventsPricingCard">
            <div className="price"><span><h1>$16</h1> per table</span></div>
            <div className="eventName"><h3>Birthday Events</h3></div>
            <div className="eventText"> <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p></div>
            <button>Shop now</button>
          </div>
          <div className="eventsPricingCard">
          <div className="price"><span><h1>$16</h1> per table</span></div>
            <div className="eventName"><h3>Birthday Events</h3></div>
            <div className="eventText"> <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p></div>
            <button>Shop now</button>
          </div>
          <div className="eventsPricingCard">
          <div className="price"><span><h1>$16</h1> per table</span></div>
            <div className="eventName"><h3>Birthday Events</h3></div>
            <div className="eventText"> <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p></div>
            <button>Shop now</button>
          </div>
        </div>
      </div>


      <div className="ourTeams">
      <div className="ourTeamsHeader">
          <p>Devoted to wonderful beauty</p>
          <h1>Events Pricing</h1>
        </div>
      <div className="users">
      <div className="user">
          <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr1.jpg" alt="" />
          <div className="name">Velva Kopf</div>
          <div className="userJob">Biologist</div>
        </div>
        <div className="user">
        <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr2.jpg" alt="" />
          <div className="name">Sarah Palmer</div>
          <div className="userJob">Florist</div>
        </div>
        <div className="user">
        <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr3.jpg" alt="" />
          <div className="name">Jessica Swift</div>
          <div className="userJob">Photographer</div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Home