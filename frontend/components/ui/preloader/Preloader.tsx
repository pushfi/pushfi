import React from "react";
import { motion } from "framer-motion";

const Preloader = () => {
    return (
        <div className="flex fixed bg-textColor/10 top-0 left-0 right-0 bottom-0 z-30 backdrop-blur-sm justify-center items-center">
            {" "}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{
                    duration: 0.5,
                    ease: "linear",
                    repeat: Infinity,
                    type: "tween",
                }}
                className="flex w-12 h-12 border-4 rounded-full border-primary border-b-transparent"
            ></motion.div>
        </div>
    );
};

export default Preloader;
