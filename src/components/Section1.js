import { motion } from 'framer-motion';
import './sec1.css';

export default function Section1() {
  return (
    <section className="criteria-container">
      <motion.div
        className="box left"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.03, boxShadow: "0 8px 16px rgba(0,0,0,0.2)" }}
      >
        <h2>NSCP Investment Criteria</h2>
        <p>
          We invest in businesses with niche leadership positions. When evaluating possible investments, the most important criteria we look for is differentiation: what is it about a prospect that provides superior long-term opportunities. We also thoroughly consider financial, industry and company-specific criteria.
        </p>
        <button>Learn More</button>
      </motion.div>

      <motion.div
        className="box right"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        whileHover={{ scale: 1.03, boxShadow: "0 8px 16px rgba(0,0,0,0.2)" }}
      >
        <h2>NSCP Value Proposition</h2>
        <p>
          <strong>For business owners</strong> seeking an exit or liquidity, NSCP structures flexible solutions.
        </p>
        <button>Partner with Us</button>
        <p>
          <strong>For buy-side and sell-side intermediaries,</strong> NSCP is an excellent partner. We are efficient when vetting businesses. When our rigorous analysis supports our commitment, we move quickly to complete the investment.
        </p>
        <button>See Our Process</button>
      </motion.div>
    </section>
  );
}
