'use client';
import { useState } from "react";
import { QuestionType } from "@/app/lib/definitions";
import QuestionCard from "../question/QuestionCard";

export default function Quiz({ questionsArr }: { questionsArr: QuestionType[]}) {
 
    const [totalScore, setTotalScore] = useState(0);
    const [quizInProgressStatus, setQuizInProgressStatus] = useState(true);
    return (
        <div>
            {quizInProgressStatus && (
                
                <>
                    <QuestionCard questions={questionsArr} setQuizInProgressStatus={setQuizInProgressStatus} setTotalScore={setTotalScore} />
                </>
                
            )}
            {!quizInProgressStatus && (
                
                <div>Total Score : {totalScore} / {questionsArr.length}</div>
                
            )}
        </div>
      
    );
  }
  