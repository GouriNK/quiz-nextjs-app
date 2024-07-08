export type QuestionType = {
    id?: string;
    questionText: string;
    options?: string[];
    correctAnswer: string;
    explanation: string;
    domainId?: MasterDataType;
}

export type MasterDataType = {
    id: string;
    type: string;
    label: string;
    value: string;
}