"use client";
import { motion } from "framer-motion"
import { ArrowRight } from 'lucide-react'
import { PreviewCard } from "./Cards/PreviewCard";

export const Hero = () => {
  return (
    <section className='px-5 py-20'>
      
      <div className='max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 items-canter'>

        <motion.div
          className="text-center lg:text-left"
          initial={{ opacity: 0, y: 30}}
          animate ={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
        >


        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Ace Your IntervueAI
          <span className="block">
            With AI Practice
            </span> 
        </h1>

        <p className="mt-6 text-muted-foreground text-lg">
          Generate interview questions,
          practice answers and get AI feedback.
        </p>

        <button
         className="
            mt-8
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-black
            px-6
            py-3
            text-white
            cursor-pointer
            "
            >
          Start Practice

          <ArrowRight size={18} />
        </button>
        
        </motion.div>

        <PreviewCard />
      </div>
    </section>
  )
}
