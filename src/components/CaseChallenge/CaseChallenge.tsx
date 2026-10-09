import { IconCard } from "@/components/IconCard/IconCard";
import styles from "./CaseChallenge.module.css";

export function CaseChallenge() {
  return (
    <div className={styles.card}>
      <div className={styles.inner}>
        <div className={styles.textCard}>
          <p className={styles.heading}>The challenge</p>
          <div className={styles.subheadingWrap}>
            <p className={styles.subheading}>One flow, many products</p>
          </div>
          <div className={styles.body}>
            <p className={styles.lead}>
              The challenge wasn&rsquo;t simply to redesign an existing
              application flow. We needed to create a generic and scalable
              foundation that could support different insurance products
              without compromising the experience for the customer.
            </p>
            <p className={styles.spaced}>
              Existing application flows had grown around individual
              products, resulting in different patterns, interactions and
              solutions for similar problems. Instead of optimising each flow
              separately, we saw an opportunity to rethink the experience as
              a system.
            </p>
            <p className={styles.spaced}>
              The new flow needed to balance multiple perspectives: make
              applying simple and intuitive for customers, support business
              and product requirements, use consistent UX patterns, align
              with our design system and WCAG standards, and remain flexible
              enough to accommodate different products and scenarios.
            </p>
          </div>
        </div>

        <div className={styles.goal}>
          <IconCard
            size="l"
            icon="/case-asr/icons/flag.svg"
            title="The goal was clear"
            description="Create one scalable foundation that teams could build on, while keeping each application experience relevant to the customer and the product.The home insurance application would be the first product to put this foundation into practice."
          />
        </div>
      </div>
    </div>
  );
}
