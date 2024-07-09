export type MasterDataType = {
    id: string;
    type: string;
    label: string;
    value: string;
}

export type OptionType = {
    text: string;
    isCorrect: boolean;
}

export type QuestionType = {
    id: string;
    questionText: string;
    explanation: string;
    correctAnswer: OptionType;
    options: [OptionType, OptionType, OptionType, OptionType];
    domainId: string;
    domain: MasterDataType;
}
