'use client'

import { useState, useEffect } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { QuestionType } from "@/app/lib/definitions";
import { useRouter } from 'next/navigation'
import Link from "next/link";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";


export default function Page({ params }: { params: { domain: string } }) {

    const { data: session, status } = useSession();
    const router = useRouter();
    const domain = params.domain;
    const [questions, setQuestions] = useState<QuestionType[]>([]);

    useEffect(() => {
      if (status === "unauthenticated") {
        router.push('/api/auth/signin');
      }

      async function fetchQuestions() {
        const response = await fetch('/api/questions');
        const data = await response.json();
        setQuestions(data);
      }
  
      fetchQuestions();
    }, [status, router]);

    if(!session) {
      return null;
    }
  
    const handleDelete = async (rowData: QuestionType) => {
      // Implement delete functionality here
      const confirmed = window.confirm('Are you sure you want to delete this question?');
      if (confirmed) {
        const response = await fetch('/api/questions/delete', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id : rowData.id }),
        });
        if (response.ok) {
          console.log('Question deleted successfully');
          setQuestions(questions.filter(question => question.id !== rowData.id));
        } else {
          console.error('Failed to delete question');
        }
      }
    };
  
    const actionTemplate = (rowData: QuestionType) => {
      return (
        <>
          <Link href={`/quiz/question/${rowData.id}/edit`} className="p-button-rounded p-button-success p-mr-2">
             Edit
          </Link>
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
  