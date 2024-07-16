'use client';
 
import { QuestionType } from "@/app/lib/definitions";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import QuestionForm from "@/app/components/quiz/question-form";

export default function Page({ params }: { params: { id: string } }) {
  
  const questionId = params.id;
  const router = useRouter(); // Use the useRouter hook

    const [questionForEdit, setQuestionForEdit] = useState<QuestionType | null>(null);

    useEffect(() => {
      async function fetchQuestionById() {
        const response = await fetch(`/api/questions/question/${questionId}`);
        const data = await response.json();
        setQuestionForEdit(data)
      }
  
      fetchQuestionById();
    }, []);

  const handleSubmit = async (formData: FormData) => {
    console.log('Thsi is form data :', formData);
    const modifiedObject = { ...formData, id: undefined, domain : undefined };
    const response = await fetch(`/api/questions/edit/${questionId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(modifiedObject),
    });

    if (response.ok) {
      router.push('/quiz/all/view');
    } else {
      console.error('Failed to update question');
    }
  };
  
  return (
      <div>Question Edit Page : {questionId}
        {questionForEdit && (
            <QuestionForm question={questionForEdit} action={handleSubmit}/>
        )}
      </div>
    );
  }
  