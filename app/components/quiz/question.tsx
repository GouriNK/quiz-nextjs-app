'use client';

import { Card } from 'primereact/card';
import { RadioButton, RadioButtonChangeEvent } from 'primereact/radiobutton';
import { Button } from 'primereact/button';
import { useState, Dispatch, SetStateAction } from 'react';
import TestProgress from './test-progress';
import { clsx } from 'clsx';
import styles from './question.module.css';
import type { OptionType, QuestionType } from '@/app/lib/definitions';

export default function Question(
    { questions, setQuizInProgressStatus, setTotalScore }: 
        {   questions: QuestionType[], 
            setQuizInProgressStatus: Dispatch<SetStateAction<boolean>>,  
            setTotalScore: Dispatch<SetStateAction<number>>
    }) {
    const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showAnswerButton, setShowAnswerButton] = useState(true);

    const handleOptionChange = (e: RadioButtonChangeEvent) => {
        setSelectedOption(e.target.value);
    };

    const handleNextClick = () => {
        console.log('Selected Option:', selectedOption);
        // check option and score
        if(selectedOption?.text === questions[currentQuestionIndex].correctAnswer.text) {
            setTotalScore(prevTotalScore => { return prevTotalScore+1 });
        }
        setSelectedOption(null);

        // increase question index
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }

        setShowAnswerButton(prevShowAnswerButton => { return !prevShowAnswerButton });

        if(currentQuestionIndex == questions.length - 1) {
            setQuizInProgressStatus(false);
        }
    };

    const handleShowAnswer = () => {
        setShowAnswerButton(prevShowAnswerButton => { return !prevShowAnswerButton });
    };

    return (
        <>
        <TestProgress part={currentQuestionIndex+1} whole={questions.length} />
        <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
            <Card title={questions[currentQuestionIndex]?.questionText}>
                <div>
                    {questions[currentQuestionIndex]?.options?.map((option, index) => (
                        <div key={index} className="p-field-radiobutton" style={{ marginBottom: '10px' }}>
                            <RadioButton
                                inputId={`option${index}`}
                                name="option"
                                value={option}
                                onChange={handleOptionChange}
                                checked={selectedOption === option}
                                disabled={!showAnswerButton}
                            />
                            <label htmlFor={`option${index}`} style={{ marginLeft: '8px' }}
                                className={clsx({
                                    [styles.correctAnswer]: option.isCorrect && !showAnswerButton
                                })}
                            >
                                {option.text}
                            </label>
                        </div>
                    ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                {currentQuestionIndex < questions.length - 1 && !showAnswerButton && (
                    <Button label="Next" icon="pi pi-arrow-right" onClick={handleNextClick} />
                )}
                { showAnswerButton && (
                    <Button label="Show Answer" icon="pi pi-arrow-right" onClick={handleShowAnswer} />
                )}
                {currentQuestionIndex == questions.length - 1 && !showAnswerButton && (
                    <Button label="Get Results" icon="pi pi-arrow-right" onClick={handleNextClick} />
                )}
                </div>
                {!showAnswerButton && (
                    <div style={{ marginTop: '20px' }}>
                        <p>Some additional text at the bottom</p>
                    </div>
                )}
            </Card>
        </div>
        </>
       
    );
}
