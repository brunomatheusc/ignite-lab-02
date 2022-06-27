import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, DiscordLogo, FileArrowDown, Image, Lightning } from "phosphor-react";

import { useGetLessonBySlugQuery } from "../graphql/generated";

import '@vime/core/themes/default.css';

interface VideoProps {
    lessonSlug: string;
}

export default function Video({ lessonSlug }: VideoProps) {
    const { data } = useGetLessonBySlugQuery({
        variables: { slug: lessonSlug },
    });

    if (!data || !data.lesson) {
        return (
            <div className="flex-1">
                <p>Carregando..</p>
            </div>
        );
    }

    const { lesson: { title, description, teacher, videoId }} = data;

    return (
        <div className="flex-1">
            <div className="bg-black flex justify-center">
                <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
                    <Player>
                        <Youtube videoId={videoId!} />
                        <DefaultUi />
                    </Player>
                </div>
            </div>

            <div className="p-6 sm:p-8 max-w-[1100px] mx-auto">
                <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-16">
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold">{ title }</h1>

                        <p className="mt-4 text-gray-200 leading-relaxed">
                            { description }
                        </p>

                        { teacher && (
                        <div className="flex items-center gap-4 mt-6">
                            <img 
                                className="h-16 w-16 rounded-full border-2 border-blue-500"
                                src={teacher.avatarURL} 
                                alt="Image of User avatar from github" 
                            />

                            <div className="leading-relaxed">
                                <strong className="font-bold text-2xl block">{ teacher.name }</strong>
                                <span className="text-gray-200 text-sm block">{ teacher.bio }</span>
                            </div>
                        </div>
                        )}
                    </div>

                    <div className="w-full sm:w-fit flex flex-col gap-4">
                        <a href="#" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
                            <DiscordLogo size={24} />
                            Comunidade do Discord
                        </a>

                        <a href="#" className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors">
                            <Lightning size={24} />
                            Acesse o desafio
                        </a>
                    </div>

                </div>

                <div className="gap-8 mt-16 sm:mt-20 grid sm:grid-cols-2">
                    <a href="#" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-green-700 h-full p-6 flex items-center">
                            <FileArrowDown size={40} />
                        </div>
                    
                        <div className="py-6 leading-relaxed">
                            <strong className="text-lg sm:text-2xl">Material complementar</strong>
                            <p className="text-xs sm:text-sm text-gray-200 mt-2">Acesse o material complementar para acelerar o seu desenvolvimento</p>
                        </div>
                    
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={24} color="#81d8f7" />
                        </div>
                    </a>

                    <a href="#" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-green-700 h-full p-6 flex items-center">
                            <Image size={40} />
                        </div>
                    
                        <div className="py-6 leading-relaxed">
                            <strong className="text-lg sm:text-2xl">Wallpapers exclusivos</strong>
                            <p className="text-xs sm:text-sm text-gray-200 mt-2">Baixe Wallpapers exclusivos do Ignite Lab e personalize sua máquina</p>
                        </div>
                    
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={24} color="#81d8f7" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}
