import {openai} from "@/lib/ai"


export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {role, description} = body;

    const prompt = `
    You are an expert interviewer.

    Generate 5 interview questions for:

    Role: ${role}
    Job Description: ${description}

    Return JSON format:
    {
        "questions": [
            { "question": "..." }
        ]
    }
    `

    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            {
                role: "user",
                content: prompt,
            }
        ]
    })

    const content = response.choices[0].message.content

    return Response.json({
        success: true,
        data: content, 
    }
    )
}catch (error) {
      return Response.json(
          { success: false, error: "AI failed" },
          { status: 500 }
      )

  }
}
