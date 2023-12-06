"use client"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import diagnosis from "@/utils/diagnosis"

export default function InfoCard() {
  const [symptoms, setSymptoms] = useState<string>("")
  const [cure, setCure] = useState<string>("")

  async function onSubmit() {
    setCure("loading")
    const answer = await diagnosis(symptoms)
    setCure(answer)
  }

  return (
    <Card className="m-auto h-5/6 w-5/6 shadow-lg border-2">
      <CardHeader className="flex w-full mt-8">
        <CardTitle className="mx-auto">What is thy symptoms m'lady?</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col w-full">
        <Textarea
          id="symptoms"
          placeholder="What the Fuck do you have wrong with you????"
          className="col-span-3 resize-none h-32"
          onChange={(e) => setSymptoms(e.target.value)}
        />
        <button className="mx-auto my-4 p-2 bg-black text-white" onClick={() => onSubmit()}>
          Ok I will do magic!
        </button>
      </CardContent>
      <CardFooter className="flex flex-col h-64 pt-8 overflow-y-scroll white-space-pre-line">
        {cure.split('\n').map((line, index) => (
          <p key={index} className="mr-auto">{line}</p>
        ))}
      </CardFooter>
    </Card>
  )
}
