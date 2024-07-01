export type Option = {
    label: string;
    isCorrectAnswer: boolean
}
export type QuestionType = {
    id?: string;
    questionText: string;
    options: Option[];
    correctAnswer: Option;
    explanation: string;
    type?: string;
}