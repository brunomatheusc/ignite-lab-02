import { Link, useParams } from 'react-router-dom';
import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export default function Lesson({ title, availableAt, type, slug }: LessonProps) {
    const { slug: routeSlug } = useParams();

    const isLessonAvailable = isPast(availableAt);
    const availableDateFormatted = format(availableAt, "EEEE'  •  'd'  de  'MMMM'  •  'k'h'mm", { locale: ptBR });
    const isActiveLesson = !!(slug === routeSlug);

    return (
        <Link to={`/event/lesson/${slug}`} className="group">
            <span>{availableDateFormatted}</span>

            <div className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 ${isActiveLesson ? 'bg-green-500' : ''}`}>
                <header className="flex items-center justify-between">
                    { isLessonAvailable ? (
                    <span className={`flex items-center gap-2 text-sm text-blue-500 font-medium ${isActiveLesson ? 'text-white' : ''}`}>
                        <CheckCircle size={20} />
                        Conteúdo liberado
                    </span>
                    ) : (
                    <span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
                        <Lock size={20} />
                        Em breve
                    </span>
                    )}
                    
                    <span className={`text-xs rounded px-2 py-[0.125rem] text-white border font-bold ${isActiveLesson ? 'border-white' : 'border-green-300'}`}>
                        { type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA' }
                    </span>
                </header>

                <strong className={`mt-5 block ${isActiveLesson ? 'text-white' : 'text-gray-200'}`}>
                    {title}
                </strong>
            </div>
        </Link>
    );
}