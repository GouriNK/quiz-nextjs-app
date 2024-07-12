import { ProgressBar } from 'primereact/progressbar';

import { Card } from 'primereact/card';
export default function TestProgress({part, whole} : {part: number, whole: number}) {
    const valueTemplate = (value: number) => {
        return (
            <>
                {part}/<b>{whole}</b>
            </>
        );
    };

    const actualVal = part/whole * 100;

    return (
        <Card className="card">
            <ProgressBar value={actualVal} displayValueTemplate={valueTemplate}></ProgressBar>
        </Card>
    );
}