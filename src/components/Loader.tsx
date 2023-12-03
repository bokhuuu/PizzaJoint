import { motion, useCycle } from "framer-motion";

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "mirror",
      },
      y: {
        duration: 0.25,
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  },
  animationTwo: {
    y: [0, -40],
    x: 0,
    transition: {
      y: {
        duration: 0.25,
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  },
};

const Loader = () => {
  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");
  return (
    <>
      <motion.div
        className="loader"
        variants={loaderVariants}
        animate={animation}
      ></motion.div>
      <button style={{ marginTop: -10 }} onClick={() => cycleAnimation()}>
        Cycle loader
      </button>
    </>
  );
};

export default Loader;
