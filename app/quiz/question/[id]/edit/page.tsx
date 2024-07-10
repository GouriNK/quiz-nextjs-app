'use client';
 
import { QuestionType } from "@/app/lib/definitions";
import QuestionForm from "@/app/ui/quiz/question-form";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
  
  const questionId = params.id;

    const [questionForEdit, setQuestionForEdit] = useState<QuestionType | null>(null);

    useEffect(() => {
      async function fetchQuestionById() {
        const response = await fetch(`/api/questions/question/${questionId}`);
        const data = await response.json();
        setQuestionForEdit(data)
      }
  
      fetchQuestionById();
    }, []);

  const handleSubmit = (formData: FormData) => {
    console.log('Thsi is form data :', formData);
  };
  
  return (
      <div>Question Edit Page : {questionId}
        {questionForEdit && (
            <QuestionForm question={questionForEdit} action={handleSubmit}/>
        )}
      </div>
    );
  }
  