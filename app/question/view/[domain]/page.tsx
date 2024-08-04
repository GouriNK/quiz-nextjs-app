'use client'

import { useState, useEffect, useRef } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
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
    const [selectedRowForDelete, setSelectedRowForDelete]=useState<QuestionType | null>(null);

    const toast = useRef(null);

    const accept = async () => {
      const response = await fetch('/api/questions/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id : selectedRowForDelete?.id }),
      });
      if (response.ok) {
        toast.current?.show({ severity: 'success', summary: 'Confirmed', detail: 'Question has been deleted successfully!', life: 3000 });
        setQuestions(questions.filter(question => question.id !== selectedRowForDelete?.id));
      } else {
        console.error('Failed to delete question');
      }
        
    }

    const reject = () => {
      return;
    }

    const confirm2 = () => {
      confirmDialog({
          message: 'Do you want to delete this record?',
          header: 'Delete Confirmation',
          icon: 'pi pi-info-circle',
          defaultFocus: 'reject',
          acceptClassName: 'p-button-danger',
          accept,
          reject
      });
  };

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

    
  
    const handleDelete = (rowData: QuestionType) => {
      // Implement delete functionality here
      confirm2();
      setSelectedRowForDelete(rowData);
    };
  
    const actionTemplate = (rowData: QuestionType) => {
      return (
        <>
          <Link href={`/question/edit/${rowData.id}`} className="p-button-rounded p-button-success p-mr-2">
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
        <Link href={`/question/create`} className="p-button font-bold">
                        {'Create a new Question'}
                  </Link>
        <DataTable value={questions} responsiveLayout="scroll">
          <Column field="questionText" header="Question"></Column>
          <Column body={actionTemplate} header="Actions" style={{ textAlign: 'center', width: '8em' }}></Column>
        </DataTable>
        <Toast ref={toast} />
        <ConfirmDialog />
      </div>
    );
  }
  