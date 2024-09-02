import { twMerge } from "tailwind-merge"

type Props = {
    children: React.ReactNode
    size?: "sm" | "md" | "lg"
    className?: string
}
export const Button = ({ children, size = "md", className }: Props) => {
    const sizeClass = {
        sm: "text-xs px-2 py-1",
        md: "text-sm px-5 py-3",
        lg: "text-base px-8 py-5"
    }
    return(
        <button 
            className={twMerge(
                "bg-light text-textDark rounded-full",
                sizeClass[size],
                className
            )}>
            {children}
        </button>
    )
}