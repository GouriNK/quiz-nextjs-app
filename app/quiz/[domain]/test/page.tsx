'use client'

import QuestionSet from "@/app/components/quiz/question-set";
import { QuestionType } from "@/app/lib/definitions";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { domain: string } }) {
    const domain = params.domain;

    const [questionsForDomain, setQuestionsForDomain] = useState<QuestionType[]>([]);

    useEffect(() => {
      async function fetchQuestions() {
        const response = await fetch(`/api/questions/${domain}`);
        const data = await response.json();
        setQuestionsForDomain(data);
      }
  
      fetchQuestions();
    }, []);

    return (
      <div>
        Quiz Test Page {domain}
        <br/>Fetched from DB {questionsForDomain.length}
        <QuestionSet questionsArr={questionsForDomain}/>
        </div>

    );
  }
  