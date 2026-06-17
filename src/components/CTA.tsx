"use-client"

import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="px-5 py-20">

      <div className="mx-auto max-w-6xl">

        <div className="
          rounded-3xl
          bg-black
          text-white
          p-10
          md:p-16
          text-center
        ">

          <h2 className="text-3xl md:text-4xl font-bold">
            Start practicing smarter today
          </h2>

          <p className="mt-4 text-white/70">
            Improve your interview skills with AI-powered feedback in minutes.
          </p>

          <button className="
            mt-8
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-white
            text-black
            px-6
            py-3
            font-medium
            hover:scale-105
            transition
          ">
            Get Started
            <ArrowRight size={18} />
          </button>

        </div>

      </div>

    </section>
  );
};