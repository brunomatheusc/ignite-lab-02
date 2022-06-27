import { useGetLessonsQuery } from "../graphql/generated";
import Lesson from "./Lesson";

export default function Sidebar() {
    const { data } = useGetLessonsQuery();

    return (
        <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600 hidden sm:flex sm:flex-col">
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
                Cronograma de aulas
            </span>

            <div className="flex flex-col gap-8">
                { data?.lessons.map(({ availableAt, title, slug, lessonType, id }, key) => (
                    <Lesson 
                        key={`lesson-${id}-${key}`} 
                        availableAt={new Date(availableAt)} 
                        title={title} 
                        slug={slug} 
                        type={lessonType} 
                    />
                ))}
            </div>
        </aside>
    );
}
