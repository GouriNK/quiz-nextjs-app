'use client'

import { useState, useEffect } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { QuestionType } from "@/app/lib/definitions";
import { useRouter } from 'next/navigation'
import Link from "next/link";

export default function Page({ params }: { params: { domain: string } }) {
  const router = useRouter()

    const domain = params.domain;
    const [questions, setQuestions] = useState<QuestionType[]>([]);

    useEffect(() => {
      async function fetchQuestions() {
        const response = await fetch('/api/questions/domain1');
        const data = await response.json();
        setQuestions(data);
      }
  
      fetchQuestions();
    }, []);
  
    const handleEdit = (rowData: QuestionType) => {
      // Implement edit functionality here
      console.log('Edit:', rowData);
      // router.push(`/quiz/question/${rowData.id}/edit`) // Navigate to the new post page
    //   router.push(
    //     pathname: `/quiz/question/${rowData.id}/edit`,
    //     query: rowData,
    //   ,
    //   `/quiz/question/${rowData.id}/edit` // use this to clear query strings like key value from URL
    // );
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
          {/* <Link 
            href={{
              pathname: `/quiz/question/${rowData.id}/edit`,
              query: {value : rowData }
            }}
            className="p-button-rounded p-button-success p-mr-2">
             Edit
          </Link> */}
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
        <Link href={`/quiz/question/create`} className="p-button font-bold">
                        {'Create a new Question'}
                  </Link>
        <DataTable value={questions} responsiveLayout="scroll">
          <Column field="questionText" header="Question"></Column>
          <Column body={actionTemplate} header="Actions" style={{ textAlign: 'center', width: '8em' }}></Column>
        </DataTable>
      </div>
    );
  }
  