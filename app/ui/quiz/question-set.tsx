'use client';
import { useState } from "react";
import Question from "./question";
import { questionArr } from '@/app/lib/placeholder-data';
export default function QuestionSet({type} : {type: string;}) {
 
    const [totalScore, setTotalScore] = useState(0);
    const [quizInProgressStatus, setQuizInProgressStatus] = useState(true);
    return (
        <div>
            {quizInProgressStatus && (
                
                <>
                <div>QuestionSet : {type}</div>
                <Question questions={questionArr} setQuizInProgressStatus={setQuizInProgressStatus} setTotalScore={setTotalScore} />
                </>
                
            )}
            {!quizInProgressStatus && (
                
                <div>Total Score : {totalScore} / {questionArr.length}</div>
                
            )}
        </div>
      
    );
  }
  