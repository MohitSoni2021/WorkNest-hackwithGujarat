import { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { axiosFetch } from '../../utils';
import { CheckoutForm } from '../../components';
import './Pay.scss';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const Pay = () => {
  const { _id } = useParams();
  const [clientSecret, setClientSecret] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await axiosFetch.post(`/orders/create-payment-intent/${_id}`);
        setClientSecret(data.clientSecret);
      } catch ({ response }) {
        setError('Failed to initialize payment. Please try again.');
        console.log(response);
      } finally {
        setIsLoading(false);
      }
    })();
    window.scrollTo(0, 0);
  }, [_id]);

  const appearance = {
    theme: 'night',
    variables: {
      colorPrimary: '#1e90ff',
      colorBackground: 'transparent',
      colorText: '#ffffff',
      borderRadius: '8px',
      fontFamily: 'Inter, sans-serif',
    },
  };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="pay">
      <div className="pay__header">
        <h1>Secure Payment</h1>
        <p className="pay__subtitle">Complete your transaction with confidence using Stripe.</p>
      </div>
      <div className="pay__container">
        {isLoading ? (
          <div className="pay__loading">Loading payment details...</div>
        ) : error ? (
          <div className="pay__error">{error}</div>
        ) : clientSecret ? (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        ) : (
          <div className="pay__error">Payment initialization failed. Please refresh the page.</div>
        )}
      </div>
    </div>
  );
};


export default Pay;