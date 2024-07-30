import React from "react";
import { motion } from "framer-motion";
import { GiCheckMark } from "react-icons/gi";
import { useAppSelector } from "@/redux/hooks";

const Loadscreen = () => {
    const submit_feedback = useAppSelector(
        (state) => state.publicStates.feedback
    );
    return (
        <div className="fixed top-0 bottom-0 right-0 left-0 bg-white160 z-50 backdrop-blur-sm flex justify-center items-center">
            {submit_feedback == "loading" && (
                <motion.div
                    animate={{ rotate: 360 }} // Rotate to 360 degrees
                    transition={{
                        duration: 1, // Duration of each rotation (1 seconds)
                        ease: "linear", // Linear easing for smooth, constant rotation
                        repeat: Infinity, // Repeat infinitely
                        type: "tween", // Use tween to animate based on numeric values
                    }}
                    className="flex w-12 h-12 border-8 rounded-full border-yellow-300 border-b-transparent"
                ></motion.div>
            )}
            {submit_feedback == "success" && (
                <GiCheckMark className="text-green-500 text-5xl" />
            )}
        </div>
    );
};

export default Loadscreen;
