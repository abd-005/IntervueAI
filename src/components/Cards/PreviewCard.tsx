"use-client"

import { easeInOut, motion } from "framer-motion";

export const PreviewCard = () => {
  return (
    <motion.div
    animate={{
        y:[0, -10, 0]
    }}
    transition={{
        duration:4,
        repeat: Infinity,
        ease: easeInOut, 
    }}
    >

        <div className="relative">
            <div className="
            rounded-3xl
            border
            p-6
            shadow-xl
            bg-background
            ">
                <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-semibold">
                        Frontend Interview
                    </h3>

                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm">
                        Score 8.5
                    </span>

                </div>

                <div className="space-y-4">
                    <div>
                        <p className="text-sm text-muted-foreground">
                            Question
                        </p>
                        
                        <p className="font-medium">
                            What is UseEffect?
                        </p>
                        
                    </div>

                    <div>
                        <p className="text-sm text-muted-foreground">
                            AI Feedback
                        </p>
                        
                        <p>
                            Great Answer. Mention cleanup
                            functions for a stronger response.
                        </p>

                    </div>

                </div>

            </div>

        </div>
    </motion.div>
  )
}
