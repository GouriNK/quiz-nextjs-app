'use client';

import { QuestionType } from "@/app/lib/definitions";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import QuestionForm from "@/app/components/question/QuestionForm";

export default function Page({ params }: { params: { id: string } }) {

  const questionId = params.id;
  const { data: session, status } = useSession();
  const router = useRouter(); // Use the useRouter hook

  const [questionForEdit, setQuestionForEdit] = useState<QuestionType | null>(null);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push('/api/auth/signin');
    }
    async function fetchQuestionById() {
      const response = await fetch(`/api/questions/question/${questionId}`);
      const data = await response.json();
      setQuestionForEdit(data)
    }

    fetchQuestionById();
  }, []);

  if (!session) {
    return null;
  }

  const handleSubmit = async (formData: FormData) => {
    console.log('Thsi is form data :', formData);
    const modifiedObject = { ...formData, id: undefined, domain: undefined };
    const response = await fetch(`/api/questions/edit/${questionId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(modifiedObject),
    });

    if (response.ok) {
      router.push('/question/view/all');
    } else {
      console.error('Failed to update question');
    }
  };

  return (
    <div>Question Edit Page : {questionId}
      {questionForEdit && (
        <QuestionForm question={questionForEdit} action={handleSubmit} />
      )}
    </div>
  );
}
