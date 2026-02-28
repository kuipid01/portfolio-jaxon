import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import clsx from "clsx"
type ButtonType = "button" | "submit" | "reset";

export const DarkBtn = ({
    text,
    className,
    onClick,
    type = "button",
    disabled = false,
}: {
    text: string;
    className?: string;
    onClick?: () => void;
    type?: ButtonType;
    disabled?: boolean;
}) => {
    return <motion.button
        initial="initial"
        whileHover="hover"
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={clsx("px-5 bg-black text-white font-bold text-sm flex items-center gap-2 py-2 hover:bg-white hover:text-black hover:border-[#dfdfdf] cursor-pointer hover:border transition-colors duration-300", className)}
    >
        {text}

        <div className="relative w-[20px] h-[20px] overflow-hidden">
            <motion.div
                className="flex will-change-transform"
                variants={{
                    initial: { x: "-100%" },
                    hover: { x: "0%" }
                }}
                transition={{
                    duration: 0.42,
                    ease: [0.4, 0, 0.2, 1]
                }}
            >
                <ArrowRight size={20} className="shrink-0 " />
                <ArrowRight size={20} className="shrink-0  " />
            </motion.div>
        </div>
    </motion.button>
}



export const LightBtn = ({ text, className }: { text: string, className?: string }) => {
    return (
        <motion.button
            initial="initial"
            whileHover="hover"
            className={clsx("px-5 bg-white border border-[#dfdfdf] font-bold text-sm flex items-center gap-2 py-2 hover:bg-black hover:text-white cursor-pointer transition-colors duration-300", className)}
        >
            {text}

            <div className="relative w-[20px] h-[20px] overflow-hidden">
                <motion.div
                    className="flex will-change-transform"
                    variants={{
                        initial: { x: "-100%" },
                        hover: { x: "0%" }
                    }}
                    transition={{
                        duration: 0.42,
                        ease: [0.4, 0, 0.2, 1]
                    }}
                >
                    <ArrowRight size={20} className="shrink-0 " />
                    <ArrowRight size={20} className="shrink-0  " />
                </motion.div>
            </div>
        </motion.button>
    )
}
