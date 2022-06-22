import { gql, useQuery } from "@apollo/client";
import Lesson from "./Lesson";

const GET_LESSONS_QUERY = gql`
    query {
        lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
            id
            lessonType
            availableAt
            title
            slug
        }
    }
`;

interface GetLessonsQueryResponse {
    lessons: {
        id: string;
        title: string;
        slug: string;
        availableAt: Date;
        lessonType: 'live' | 'class';
    }[];
}

export default function Sidebar() {
    const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY);

    return (
        <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
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
