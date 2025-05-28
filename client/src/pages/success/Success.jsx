import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { axiosFetch } from "../../utils";
import { useRecoilValue } from "recoil";
import { userState } from "../../atoms";
import "./Success.scss";

const Success = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(search);
  const payment_intent = params.get("payment_intent");
  const user = useRecoilValue(userState);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    setTimeout(() => {
      console.log("Payment Intent:", payment_intent);
      navigate(`/orders?userId=${user._id}`);
    }, 5000)
  }, []);

  return (
    <div className="success">
      <div className="success__header">
        <h1>Payment Successful!</h1>
        <p className="success__subtitle">
          Thank you for your purchase. You will be redirected to your orders page in {countdown} seconds.
        </p>
      </div>
      <div className="success__container">
        <div className="success__message">
          <span className="success__icon">🎉</span>
          <p>
            Your payment was processed successfully. Please do not close the page while we redirect you.
          </p>
        </div>
      </div>
    </div>
  );
};


export default Success;