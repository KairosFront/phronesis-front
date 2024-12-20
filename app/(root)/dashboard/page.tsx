import React from "react";
import Lessons from "@/components/dashboard/Lessons";
// import InputSearcher from '@/components/shared/InputSearcher';
import Dashboard from "@/components/dashboard/Dashboard";
import DialogItem from "@/components/dashboard/form/DialogItem";
import DialogInstructions from "@/components/on-boarding/DialogInstructions";

import {
  get4t,
  getDecision,
  getExchange,
  getSectores,
} from "@/services/backend/catalogos";
import { getLessons } from "@/services/backend/lessons";
import AddProjectButton from "@/components/dashboard/AddProjectButton";
import { getProjectsList } from "@/services/backend/proyectsInfo";
import Link from "next/link";
import NotificationsDialog from "@/components/shared/notifications/NotificationsDialog";
// import ReloadProjects from "@/components/dashboard/ReloadProjects";

const HomePage = async () => {
  const [data4t, decision, exchange, sector, projectsList, allModules] =
    await Promise.all([
      get4t(),
      getDecision(),
      getExchange(),
      getSectores(),
      getProjectsList(),
      getLessons(),
    ]);

  //const response = await fetch('http://localhost:3000/api/lessons');
  //const {lessons} = await response.json();

  return (
    <div>
      <DialogInstructions />
      <NotificationsDialog />

      <section className="seguimiento mb-8">
        <div className="flex items-center justify-between mt-4">
          <h1 className="text-2xl font-bold  2xl:text-4xl">
            Proyectos que me interesan:
          </h1>

          <div className="flex gap-4 items-center justify-center">
            {/* <div className="hidden md:block">
                  <ReloadProjects />
                </div> */}

            <AddProjectButton />
          </div>
        </div>
        <p className="text-sm mb-4 ">
          {/* Aquí podras registrar todos los proyectos que te llaman la atención o
          en los que ya has invertido. */}
          Este dashboard te permite registrar y organizar los proyectos de tu
          portafolio. Con la tabla interactiva puedes monitorear el desempeño de
          cada proyecto en tiempo real y sus puntos más relevantes.
        </p>
        {/* <div className="md:hidden">
              <ReloadProjects />
            </div> */}

        <Dashboard
          projectsList={projectsList.proyectos}
          catalogos={[data4t, decision, exchange, sector]}
        />
      </section>

      {/* Seccion de lecciones*/}
      <section className="2xl:py-4 py-2 xl:pt-8" id="lecciones-main-page">
        <div className="md:flex items-center justify-between lessons-header ">
          <h1 className="text-2xl 2xl:text-4xl font-bold ">
            
            <Link href="/lessons">
            Aprende a hacer un análisis:
            </Link>
          </h1>
          {/* <InputSearcher /> */}
        </div>
        <p className="text-sm ">
          Inicia con las lecciones para aprender a hacer un análisis de manera
          profesional y convertirte en crypto researcher
        </p>

        <Lessons
          // lessons={lessons}
        
          allModules={allModules}
        />
      </section>
    </div>
  );
};

export default HomePage;
