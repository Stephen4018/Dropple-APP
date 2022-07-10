import React from "react";
// import Images from './images'

const Home = () => {
  return (
    <div>
      <div className="hero">
        <h1 className="first_text">
          The fast affordable way to deliver goods.
        </h1>
        <img src="Dropple_images/pic.png" alt="this pics" className="pic_png" />
      </div>

      <div className="banner">
        <img src="Dropple_images/pic_2.png" alt="that pics" className="pic_2" />
        <h1 className="second_text">
          The Best Delivery Drivers You’ve ever seen.
        </h1>
      </div>

      <div className="banner_1">
        <div>
          <p className="text_1">Quality Rider Ready to deliver.</p>
          <p className="text_2">
            Their will always be one nearby to pickup your parcels and more.
          </p>
        </div>
        <img src="Dropple_images/pic_3.png" className="pic_3" alt="drop" />
      </div>

      <div className="banner_2">
        <img src="Dropple_images/pic_4.png" className="pic_4" alt="drop" />
        <div>
          <div className="div">
            <p className="text_one">Got A Bike Van or Truck?</p>
            <p className="text_two">
              If you own any of the above listed and looking to double your
              earning capacity. Dropple go you covered.
            </p>
          </div>
        </div>
      </div>

      <div className="low_page">
        <p>Earn extra money delivering</p>
      </div>

      <div className="grid_hero">
        <div className="grid">
          <div>
            <h2>All Deliveries in one App</h2>
            <p>
              Downloading multiple Apps to get multiple delivery types done is
              now a thing of the past
            </p>
          </div>

          <div>
            <h2>Delivery Tracking</h2>
            <p>
              Watch your items go from pickup to delivery in real time.You can
              also share your tracking link to your customers
            </p>
          </div>

          <div>
            <h2>Multi-point Deliveries</h2>
            <p>
              Got a lot of items to send out? You can use one pilot to make all
              your deliveries.
            </p>
          </div>

          <div>
            <h2>Resend Orders</h2>
            <p>
              Think you’ve made an order before? It wasn’t deja vu - our order
              resend without having to fill those details right from the start.
            </p>
          </div>

          <div>
            <h2>Shedule pickup</h2>
            <p>
              Need to have your item picked up at a specific time? We’ve got
              that covered.
            </p>
          </div>

          <div>
            <h2>Saved Adresses</h2>
            <p>
              You can save your addresses for next time, so you won’t have to
              type it again. Just tap and keep things moving.
            </p>
          </div>
        </div>
      </div>

      <div className="mobile_app">
        <div className="display">
          <div>
            <h2>Download Dropple App</h2>

            <p>Available for iOS and Andriod</p>
          </div>
          <img src="Dropple_images/mobile.png" alt="mobile" />
        </div>
      </div>
    </div>
  );
};

export default Home;
