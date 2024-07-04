'use client';
import { useState } from "react";
import Question from "./question";
import { QuestionType } from "@/app/lib/definitions";

export default function QuestionSet({ questionsArr }: { questionsArr: QuestionType[]}) {
 
    const [totalScore, setTotalScore] = useState(0);
    const [quizInProgressStatus, setQuizInProgressStatus] = useState(true);
    return (
        <div>
            {quizInProgressStatus && (
                
                <>
                    <Question questions={questionsArr} setQuizInProgressStatus={setQuizInProgressStatus} setTotalScore={setTotalScore} />
                </>
                
            )}
            {!quizInProgressStatus && (
                
                <div>Total Score : {totalScore} / {questionsArr.length}</div>
                
            )}
        </div>
      
    );
  }
  