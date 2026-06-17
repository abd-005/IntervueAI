'use-client'

const steps = [
  {
    number: "01",
    title: "Paste Job Description",
    description: "Add any job role or description you want to practice for.",
  },
  {
    number: "02",
    title: "Practice Interview",
    description: "Answer AI-generated questions in a realistic flow.",
  },
  {
    number: "03",
    title: "Get AI Feedback",
    description: "Receive scores and improvement suggestions instantly.",
  },
];


export const HowItWorks = () => {
  return (
    <section className="px-5 py-16 bg-muted/30">

        <div className="mx-auto max-w-6xl">

            <div className="text-center mb-12">

                <h2 className="text-3xl font-bold">
                    How It Works
                </h2>

                <p className="mt-3 text-muted-foreground">
                    Simple 3-step process to improve your interview skills
                </p>

            </div>

            <div className="grid gap-8 md:grid-cols-3">
                {steps.map((step) => (
                    <div 
                    key={step.number}
                    className="
                    rounded-2xl
                    border
                    p-6
                    bg-background
                    hover:drop-shadow-lg
                    transition
                    "
                    >

                        <div className="text-sm font-bold text-muted-foreground">
                            {step.number}
                        </div>

                        <h3 className="mt-3 text-xl font-semibold">
                            {step.title}
                        </h3>

                        <p className="mt-2 text-muted-foreground">
                            {step.description}
                        </p>

                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}
