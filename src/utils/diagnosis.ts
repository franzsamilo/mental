const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

export default async function diagnosis(symptoms : string) {
  let answer = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: `I want you to act as a virtual doctor. I will describe my symptoms and you will provide a diagnosis and treatment plan. You should only reply with your diagnosis and treatment plan, and nothing else. Add explainations.`},
      { role: "user", content: symptoms}
    ]
  })

  const diagnosis = answer.data.choices[0].message.content as string

  console.log(diagnosis + "partial")

  return diagnosis
}