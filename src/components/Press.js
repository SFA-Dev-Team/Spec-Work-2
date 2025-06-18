import { motion } from 'framer-motion';
import './Press.css';

export default function Press() {
  return (
    <section className="press">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Press Releases
      </motion.h2>

      <motion.div
        className="cards"
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        {[...pressData].map((item, i) => (
          <motion.div
            key={i}
            className="card"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.03, boxShadow: "0 8px 16px rgba(0,0,0,0.15)" }}
          >
            <p>Publish Date: {item.date}</p>
            <h4>
              <a href={item.link}>{item.title}</a>
            </h4>
          </motion.div>
        ))}
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.3 }}
      >
        Read More
      </motion.button>
    </section>
  );
}

const pressData = [
  { date: "11/23/2021", title: "NSCP Announces the Sale of Premium", link: "#" },
  { date: "01/05/2020", title: "NSCP Expands its National Millwork Portfolio", link: "#" },
  { date: "12/09/2018", title: "NSCP invests in Interior Building Systems", link: "#" },
];
