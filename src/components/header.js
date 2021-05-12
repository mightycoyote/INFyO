import React from "react";
import pic from "../img/yoyo-topdown.jpg";

function Header() {
    return (
      <div className="bg-gray-900">
        <div className="container mx-auto w-6/12 p-8">
          <img src={pic} alt="Legendary Terrarian yoyo by One Drop" className="max-h-16 rounded-full inline-block"></img>
          <h1 className="text-complementary-light inline-block text-6xl">INF-yO</h1>
          <span className="text-complementary-light block">Stuff I wish I knew sooner about modern yoyos</span>
        </div>
      </div>
    );
  }

  export default Header;