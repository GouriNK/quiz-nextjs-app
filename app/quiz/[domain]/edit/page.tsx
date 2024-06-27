'use client'

import { useState } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';


type Option = {
  label: string;
  isCorrectAnswer: boolean
}
type QuestionType = {
  id?: string;
  questionText?: string;
  options?: Option[];
  correctAnswer?: Option;
  explanation?: string;
  type?: string;
}

export default  function Page({ params }: { params: { domain: string } }) {
    const domain = params.domain;
    const [questions, setQuestions] = useState<QuestionType[]>([
      { id: '1', questionText: 'What is your name?' },
      { id: '2', questionText: 'What is your age?' },
      { id: '3', questionText: 'What is your favorite color?' },
    ]);
  
    const handleEdit = (rowData: QuestionType) => {
      // Implement edit functionality here
      console.log('Edit:', rowData);
    };
  
    const handleDelete = (rowData: QuestionType) => {
      // Implement delete functionality here
      console.log('Delete:', rowData);
      setQuestions(questions.filter(question => question.id !== rowData.id));
    };
  
    const actionTemplate = (rowData: QuestionType) => {
      return (
        <>
          <Button
            label="Edit"
            icon="pi pi-pencil"
            className="p-button-rounded p-button-success p-mr-2"
            onClick={() => handleEdit(rowData)}
          />
          <Button
            label="Delete"
            icon="pi pi-trash"
            className="p-button-rounded p-button-danger"
            onClick={() => handleDelete(rowData)}
          />
        </>
      );
    };

    return (
      <div style={{ margin: '40px auto', width: '1000px'}}>
        <DataTable value={questions} responsiveLayout="scroll">
          <Column field="questionText" header="Question"></Column>
          <Column body={actionTemplate} header="Actions" style={{ textAlign: 'center', width: '8em' }}></Column>
        </DataTable>
      </div>
    );
  }
  