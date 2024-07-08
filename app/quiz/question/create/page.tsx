'use client';

import QuestionForm from "@/app/ui/quiz/question-form";

export default function Page() {

  const handleSubmit = (formData: FormData) => {
    console.log('Thsi is form data :', formData);
  };

    return (
      <QuestionForm question={null} action={handleSubmit}/>
    );
  }
  