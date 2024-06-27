import QuestionSet from "@/app/ui/quiz/question-set";

export default async function Page({ params }: { params: { domain: string } }) {
    const domain = params.domain;
    return (
      <div>
        Quiz Test Page {domain}
        <QuestionSet type={domain}/>
        </div>

    );
  }
  