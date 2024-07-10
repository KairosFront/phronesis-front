"use client";
import React, { useEffect } from "react";

//Context (menu)
import { useStateContext } from "@/contexts/ContextProvider";

//Components
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import LessonsCard from "@/components/lessons/LessonsCard";
import Loading from "../shared/Loading";
//Data
//import { lessons } from "@/lib/data";
import { AllModules, LessonPortadaProps, LessonProps } from "@/index";
import {getLastElement }from "@/utils/lessons/lessonsUtils";

type LessonsProps = {
  allModules: AllModules |  undefined;
};
const Lessons = ({allModules}: LessonsProps) => {
  const { activeMenu } = useStateContext();
  const [lessons, setLessons] = React.useState<LessonProps []>([]);
  const [lastLesson, setLastLesson] = React.useState<number>(0);
  const [loading, setLoading] = React.useState<boolean>(false);

  useEffect(() => { 
    const meCompota = async () => {
      setLoading(true);
      console.log("Holaa" )
      const { currentModuleId, id_leccion } = (await getLastElement()) as {
        currentModuleId: number;
        id_leccion: number;
      };
      console.log(currentModuleId, id_leccion)
      setLastLesson(id_leccion);
      if (allModules != undefined){
        if (currentModuleId === 2) {
          const moduleLesson = allModules["Módulo 2"];
          setLessons(moduleLesson);
        }else
        if (currentModuleId === 3) {
          const moduleLesson = allModules["Módulo 3"];
          setLessons(moduleLesson);
        }else
        if (currentModuleId === 1) {

          const moduleLesson = allModules["Módulo 1"];
          setLessons(moduleLesson);
        }

      }
      setLoading(false);
    };  
  meCompota();
  }, []);

  console.log(lessons)
  return (
    <>
      {/* Carousel de lecciones */}
      <div
        className={` hidden md:flex 2xl:p-14 2xl:py-2 2xl:px-20 md:px-10 2xl:mt-9 mt-3 `}
      >
      {loading && <Loading/>}
        <Carousel
          opts={{
            loop: true,
          }}
          // className={`w-full ${!activeMenu ? 'md:max-2xl:w-[90%]': ''} `}
        >
          <CarouselPrevious></CarouselPrevious>
          <CarouselContent className={` flex items-stretch`}>
            {lessons.map((lesson) => {

              const portada: LessonPortadaProps = JSON.parse(lesson.html_portada);
              const link = `/lessons/${portada.id}`

              return (
                <CarouselItem
                  className={`md:basis-1/3 ${activeMenu ? "md:w-[66px] md:basis-1/3  lg:w-[176px] 2xl:w-full" : "pl-6 2xl:basis-1/5 lg:max-xl:basis-1/4 md:max-lg:w-[80px]"} `}
                  key={lesson.id}
                >
                  <LessonsCard lesson={portada} lessonNumber={lesson.numero_leccion} link={link} status={(lesson.id <= lastLesson) ? 1 : 0}/>
                 
                
                </CarouselItem>
              )
            } )}
          </CarouselContent>
          <CarouselNext></CarouselNext>
        </Carousel>
      </div>

      {/* Carousel de lecciones en mobile */}
      <div className="md:hidden px-1 pt-8 flex overflow-x-scroll gap-6">
        {lessons.map((lesson) => {
          const portada: LessonPortadaProps = JSON.parse(lesson.html_portada);
          const link = `/lessons/${portada.id}`

          return (
            <LessonsCard lesson={portada} lessonNumber={lesson.numero_leccion} link={link} status={(lesson.id <= lastLesson) ? 1 : 0}/>
          )
               
              
        })}
      </div>
    </>
  );
};

export default Lessons;
