import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="p-5 m-2 border border-black flex space-x-36 bg-gray-900 text-white mr-auto ml-auto">
      <div>
        <h2 className="font-bold  mb-2">COMPANY</h2>
        <ul className="space-y-3">
          <li>About us</li>
          <li>Team</li>
          <li>Careers</li>
          <li>Swiggy Blog</li>
          <li>Bug Bounty</li>
          <li>Swiggy One</li>
          <li>Swiggy Corporate</li>
          <li>Swiggy Instamart</li>
          <li>Swiggy Genie</li>
        </ul>
      </div>
      <div>
        <h2 className="font-bold  mb-2">CONTACT</h2>
        <ul className="space-y-3">
          <li>Help & Support</li>
          <li>Partner with us</li>
          <li>Ride with us</li>
        </ul>
      </div>
      <div>
        <h2 className="font-bold  mb-2">LEGAL</h2>
        <ul className="space-y-3">
          <li>Terms & Conditions</li>
          <li>Refund & Cancellation</li>
          <li>Privacy Policy</li>
          <li>Offer Terms</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
