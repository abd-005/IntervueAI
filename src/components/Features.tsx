import { Card, CardContent } from "./ui/card"

const features = [
  {
    title: "AI Question Generation",
    description:
      "Generate tailored interview questions from any job description.",
  },
  {
    title: "AI Answer Review",
    description:
      "Get instant feedback on your answers and improve quickly.",
  },
  {
    title: "Progress Tracking",
    description:
      "Monitor your interview performance over time.",
  },
]

const Features = () => {
  return (
    <section className="px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold">
            Everything You Need
          </h2>

          <p className="mt-3 text-muted-foreground">
            Practice smarter with AI-powered interview preparation.
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-3">

          {features.map((feature) => (
            <Card key={feature.title}>

              <CardContent className="p-6">

                <h3 className="mb-3 text-lg font-semibold">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground">
                  {feature.description}
                </p>

              </CardContent>

            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features