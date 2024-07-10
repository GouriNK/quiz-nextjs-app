'use client';

import { QuestionType } from "@/app/lib/definitions";
import QuestionForm from "@/app/ui/quiz/question-form";

export default function Page() {
  const newQuestion : QuestionType = {
    questionText: '',
    explanation: '',
    correctAnswer: {text: '', isCorrect: true},
    domainId: '',
    options : [{text: '', isCorrect: false}, {text: '', isCorrect: false}, {text: '', isCorrect: false}, {text: '', isCorrect: false}]
}

  const handleSubmit = (formData: FormData) => {
    console.log('Thsi is form data :', formData);
  };

    return (
      <QuestionForm question={newQuestion} action={handleSubmit}/>
    );
  }
  