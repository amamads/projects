import { Star, StarHalf } from 'lucide-react';

export default function RateStars({ number }: { number: number }) {
    const num = number % 1 === 0.5 ? number - 0.5 : number;
    const stars = [];
    for (let i = 0; i < num; i++) stars.push(Star)
    if (number % 1 === 0.5) stars.push(StarHalf)
    return (
        <div className='flex'>
            {stars.map((Icon, i) => (
                <Icon className='text-yellow-500 size-4' key={i} />
            ))}
        </div>
    )
}