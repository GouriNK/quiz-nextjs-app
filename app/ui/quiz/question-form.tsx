'use client';

import { MasterDataType, OptionType, QuestionType } from "@/app/lib/definitions";
import { useEffect, useRef, useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { RadioButton } from 'primereact/radiobutton';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function QuestionForm({ question, action }: { question: QuestionType; action : (formData: any) => void; }) {

    const [submitted, setSubmitted] = useState(false);
    const [domains, setDomains] = useState<MasterDataType[]>([]);
    const toast = useRef<Toast>(null);
    const [formData, setFormData] = useState<QuestionType>(question);
    

    useEffect(() => {
        async function fetchDomains() {
            const response = await fetch('/api/masterdata/domains');
            const data = await response.json();
            setDomains(data);
        }
        fetchDomains();
    }, []);

    useEffect(() => {
        if (question) {
          console.log(question);
        } else {
            console.log('create form')
        }
      }, [question]);

    const handleDomainChange = (e: { value: string }) => {
        setFormData({ ...formData, domainId: e.value });
    };

    const handleInputTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
        const value = e.target.value;
        setFormData({ ...formData, [field]: value });
    };

    const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number, field: string) => {
        const newOptionArr = [...formData.options] as [OptionType, OptionType, OptionType, OptionType];
        newOptionArr[index] = { ...newOptionArr[index], [field]: e.target.value };
        setFormData({ ...formData, options: newOptionArr });
    }

    const handleRadioChange = (index: number) => {
        const newOptionArr = formData.options.map((item, i) => ({
          ...item,
          isCorrect: i === index,
        })) as [OptionType, OptionType, OptionType, OptionType];
        setFormData({ ...formData, options: newOptionArr, correctAnswer : newOptionArr[index]});
      };

    const handleSubmit = (e: React.FormEvent) => {
        console.log(JSON.stringify(formData));
        setSubmitted(true);
        action(formData);
    };

    return (
        <div className="p-fluid" style={{ margin: '40px auto', width: '1000px' }}>
            <Toast ref={toast} />
            <form onSubmit={handleSubmit}>
                <div className="p-field" style={{ margin: '20px' }}>
                    <label htmlFor="text">Question Text</label>
                    <InputText id="text" value={formData.questionText} onChange={(e) => handleInputTextChange(e, 'questionText')} />
                </div>
                <div className="p-field" style={{ margin: '20px' }}>
                    <label htmlFor="explanation">Explanation</label>
                    <InputText id="explanation" value={formData.explanation} onChange={(e) => handleInputTextChange(e, 'explanation')} />
                </div>
                {formData.options.map((option, i) =>
                    <div key={i} className="p-field-radiobutton" style={{ margin: '20px' }}>
                        <div className="p-field" style={{ margin: '20px' }}>
                            <label htmlFor="option">Option {i+1}</label>
                            <InputText id="option" value={option.text} onChange={(e) => handleOptionChange(e, i, 'text')} />
                        </div>
                        <RadioButton
                            inputId={`option${i}`}
                            name="correctOption"
                            value={option.isCorrect}
                            onChange={() => handleRadioChange(i)}
                            checked={option.isCorrect}
                        />
                        <hr/>
                    </div>
                )}
                <div className="p-field" style={{ margin: '20px' }}>
                    <label htmlFor="domain">Domain</label>
                    <Dropdown id="domain" value={formData.domainId} options={domains} optionValue={'id'} optionLabel={'label'} onChange={handleDomainChange} placeholder="Select a Domain" />
                </div>
                <div className="p-field" style={{ margin: '20px' }}>
                    <Button type="submit" label="Submit" disabled={!formData.questionText || !formData.explanation || !formData.domainId} />
                </div>
            </form>
        </div>
    )

}
