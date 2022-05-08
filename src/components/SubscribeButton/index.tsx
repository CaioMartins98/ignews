import { useSession, signIn } from "next-auth/react";
import { useState } from "react";
import { api } from "../../services/api";
import { getStripeJs } from "../../services/stripe-js";
import styles from "./styles.module.scss";
import ReactLoading from "react-loading";
interface SubscribeButtonProps {
  priceId: string;
}
export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    setLoading(true);
    if (!session) {
      signIn("github");
      return;
    }
    try {
      const response = await api.post("/subscribe");
      const { sessionId } = response.data;
      const stripe = await getStripeJs();
      await stripe.redirectToCheckout({ sessionId });
      setLoading(false);
    } catch (err) {
      alert(err.message);
      setLoading(false);
    }
    //criação da checkout session https://stripe.com/docs/api/checkout/sessions
  };
  return (
    <button
      onClick={handleSubscribe}
      type="button"
      className={styles.subscribeButton}
      disabled={loading ? true : false}
    >
      {loading ? (
        <ReactLoading type="bubbles" color="#121214" />
      ) : (
        "Subscribe Now"
      )}
    </button>
  );
}
