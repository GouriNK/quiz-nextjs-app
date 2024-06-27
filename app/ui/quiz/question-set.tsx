'use client';
import { useState } from "react";
import Question from "./question";

export default function QuestionSet({type} : {type: string;}) {
    const sampleQ = {
        questionText: 'Which of the following options would you choose?',
        options: [
            {
                label: 'This is A',
                isCorrectAnswer: false
            },
            {
                label: 'This is B',
                isCorrectAnswer: false
            },
            {
                label: 'This is C',
                isCorrectAnswer: true
            },
            {
                label: 'This is D',
                isCorrectAnswer: false
            }
        ],
        correctAnswer: {
            label: 'This is C',
            isCorrectAnswer: true
        },
        explanation: 'This is how it is'
    }
    const questionArr = [
        {
            questionText: '1Which of the following options would you choose?',
            options: [
                {
                    label: 'This is A',
                    isCorrectAnswer: false
                },
                {
                    label: 'This is B',
                    isCorrectAnswer: false
                },
                {
                    label: 'This is C',
                    isCorrectAnswer: true
                },
                {
                    label: 'This is D',
                    isCorrectAnswer: false
                }
            ],
            correctAnswer: {
                label: 'This is C',
                isCorrectAnswer: true
            },
            explanation: 'This is how it is'
        },
        {
            questionText: '2Which of the following options would you choose?',
            options: [
                {
                    label: 'This is A',
                    isCorrectAnswer: false
                },
                {
                    label: 'This is B',
                    isCorrectAnswer: false
                },
                {
                    label: 'This is C',
                    isCorrectAnswer: true
                },
                {
                    label: 'This is D',
                    isCorrectAnswer: false
                }
            ],
            correctAnswer: {
                label: 'This is C',
                isCorrectAnswer: true
            },
            explanation: 'This is how it is'
        },
        {
            questionText: '3Which of the following options would you choose?',
            options: [
                {
                    label: 'This is A',
                    isCorrectAnswer: false
                },
                {
                    label: 'This is B',
                    isCorrectAnswer: false
                },
                {
                    label: 'This is C',
                    isCorrectAnswer: true
                },
                {
                    label: 'This is D',
                    isCorrectAnswer: false
                }
            ],
            correctAnswer: {
                label: 'This is C',
                isCorrectAnswer: true
            },
            explanation: 'This is how it is'
        },
        {
            questionText: '4Which of the following options would you choose?',
            options: [
                {
                    label: 'This is A',
                    isCorrectAnswer: false
                },
                {
                    label: 'This is B',
                    isCorrectAnswer: false
                },
                {
                    label: 'This is C',
                    isCorrectAnswer: true
                },
                {
                    label: 'This is D',
                    isCorrectAnswer: false
                }
            ],
            correctAnswer: {
                label: 'This is C',
                isCorrectAnswer: true
            },
            explanation: 'This is how it is'
        },
        {
            questionText: '5Which of the following options would you choose?',
            options: [
                {
                    label: 'This is A',
                    isCorrectAnswer: false
                },
                {
                    label: 'This is B',
                    isCorrectAnswer: false
                },
                {
                    label: 'This is C',
                    isCorrectAnswer: true
                },
                {
                    label: 'This is D',
                    isCorrectAnswer: false
                }
            ],
            correctAnswer: {
                label: 'This is C',
                isCorrectAnswer: true
            },
            explanation: 'This is how it is'
        },
        {
            questionText: '6Which of the following options would you choose?',
            options: [
                {
                    label: 'This is A',
                    isCorrectAnswer: false
                },
                {
                    label: 'This is B',
                    isCorrectAnswer: false
                },
                {
                    label: 'This is C',
                    isCorrectAnswer: true
                },
                {
                    label: 'This is D',
                    isCorrectAnswer: false
                }
            ],
            correctAnswer: {
                label: 'This is C',
                isCorrectAnswer: true
            },
            explanation: 'This is how it is'
        },
        {
            questionText: '7Which of the following options would you choose?',
            options: [
                {
                    label: 'This is A',
                    isCorrectAnswer: false
                },
                {
                    label: 'This is B',
                    isCorrectAnswer: false
                },
                {
                    label: 'This is C',
                    isCorrectAnswer: true
                },
                {
                    label: 'This is D',
                    isCorrectAnswer: false
                }
            ],
            correctAnswer: {
                label: 'This is C',
                isCorrectAnswer: true
            },
            explanation: 'This is how it is'
        },
        {
            questionText: '8Which of the following options would you choose?',
            options: [
                {
                    label: 'This is A',
                    isCorrectAnswer: false
                },
                {
                    label: 'This is B',
                    isCorrectAnswer: false
                },
                {
                    label: 'This is C',
                    isCorrectAnswer: true
                },
                {
                    label: 'This is D',
                    isCorrectAnswer: false
                }
            ],
            correctAnswer: {
                label: 'This is C',
                isCorrectAnswer: true
            },
            explanation: 'This is how it is'
        },
        {
            questionText: '9Which of the following options would you choose?',
            options: [
                {
                    label: 'This is A',
                    isCorrectAnswer: false
                },
                {
                    label: 'This is B',
                    isCorrectAnswer: false
                },
                {
                    label: 'This is C',
                    isCorrectAnswer: true
                },
                {
                    label: 'This is D',
                    isCorrectAnswer: false
                }
            ],
            correctAnswer: {
                label: 'This is C',
                isCorrectAnswer: true
            },
            explanation: 'This is how it is'
        },
        {
            questionText: '10Which of the following options would you choose?',
            options: [
                {
                    label: 'This is A',
                    isCorrectAnswer: false
                },
                {
                    label: 'This is B',
                    isCorrectAnswer: false
                },
                {
                    label: 'This is C',
                    isCorrectAnswer: true
                },
                {
                    label: 'This is D',
                    isCorrectAnswer: false
                }
            ],
            correctAnswer: {
                label: 'This is C',
                isCorrectAnswer: true
            },
            explanation: 'This is how it is'
        }
    ]
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
  