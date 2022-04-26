import { useSession, signIn } from "next-auth/react";
import styles from "./styles.module.scss";

interface SubscribeButtonProps {
  priceId: string;
}
export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const { data: session } = useSession();

  const handleSubscribe = () => {
    if (!session) {
      signIn("github");
      return;
    }
    //criação da checkout session https://stripe.com/docs/api/checkout/sessions
  };
  return (
    <button type="button" className={styles.subscribeButton}>
      Subscribe Now
    </button>
  );
}
