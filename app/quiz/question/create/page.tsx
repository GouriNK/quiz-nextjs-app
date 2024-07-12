'use client';

import QuestionForm from "@/app/components/quiz/question-form";
import { QuestionType } from "@/app/lib/definitions";
import { useRouter } from "next/navigation";

export default function Page() {

  const router = useRouter(); // Use the useRouter hook
  const newQuestion : QuestionType = {
    questionText: '',
    explanation: '',
    correctAnswer: {text: '', isCorrect: true},
    domainId: '',
    options : [{text: '', isCorrect: false}, {text: '', isCorrect: false}, {text: '', isCorrect: false}, {text: '', isCorrect: false}]
}

  const handleSubmit = async (formData: FormData) => {
    // console.log('calling handle submit');
    // console.log('This is form data :', formData);
    // console.log(JSON.stringify(formData));
    const response = await fetch('/api/questions/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    console.log(response);
    if (response.ok) {
      console.log(response);
      console.log('Question created successfully');
      router.push('/quiz/all/view');
    } else {
      console.error('Failed to create question');
    }
  };

    return (
      <QuestionForm question={newQuestion} action={handleSubmit}/>
    );
  }
  