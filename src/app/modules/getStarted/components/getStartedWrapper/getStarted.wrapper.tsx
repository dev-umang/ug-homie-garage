import { motion } from "motion/react";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  key: string;
};

const GetStartedWrapper: FC<Props> = ({ children }) => {
  const pageVariants = {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: { opacity: 0, x: 20, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      key={"add-garage"} // Important:  key prop for AnimatePresence
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col items-center justify-center flex-1 w-full"
    >
      <div className="max-w-lg text-white">{children}</div>
    </motion.div>
  );
};

export default GetStartedWrapper;
