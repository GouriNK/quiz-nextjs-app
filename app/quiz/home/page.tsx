import { Card } from 'primereact/card';
import Link from 'next/link';

export default function Home() {
  const cardData = [
    { title: 'Card 1', subTitle: 'Subheading 1', content: 'Content for card 1', buttonLabel: 'Action 1', link: `/quiz/1/test` },
    { title: 'Card 2', subTitle: 'Subheading 2', content: 'Content for card 2', buttonLabel: 'Action 2', link: `/quiz/2/test` },
    { title: 'Card 3', subTitle: 'Subheading 3', content: 'Content for card 3', buttonLabel: 'Action 3', link: `/quiz/3/test` },
    { title: 'Card 4', subTitle: 'Subheading 4', content: 'Content for card 4', buttonLabel: 'Action 4', link: `/quiz/all/test` },
];

return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', gap: '20px' }}>
            {cardData.slice(0, 3).map((card, index) => (
                <Card key={index} title={card.title} subTitle={card.subTitle} style={{ flex: 1 }}>
                    <p>{card.content}</p>
                    <Link href={card.link} className="p-button font-bold">
                        {card.buttonLabel}
                  </Link>
                </Card>
            ))}
        </div>
        <div style={{ display: 'flex' }}>
            <Card title={cardData[3].title} subTitle={cardData[3].subTitle} style={{ flex: 1 }}>
                <p>{cardData[3].content}</p>
                <Link href={cardData[3].link} className="p-button font-bold">
                        {cardData[3].buttonLabel}
                  </Link>
            </Card>
        </div>
    </div>
);
  }
  