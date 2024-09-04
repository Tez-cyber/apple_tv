import { motion } from "framer-motion" 
type Props = {
    children: React.ReactNode
}
export const FadeIn = ({ children }: Props) => {
  return (
    <motion.div>
        {children}
    </motion.div>
  )
}
