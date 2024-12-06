import React from "react";
import AnalysisForm from "@/components/analysis/AnalysisForm";
import ShowAverages from "@/components/analysis/ShowAvarages";
import {
  getAlianza,
  getAuditorias,
  getComunity,
  getExchanges,
  getFinance,
  getFinanceCuant,
  getOnChain,
  getRoadmap,
  getTeamMembers,
  getTokenomics,
  getUseCases,
  getWhitepaper,
} from "@/services/backend/analysis";
import { AnalysisCatalogs } from "@/index";
import FormContainer from "@/components/analysis/FormContainer";
import Link from "next/link";

interface Props {
  params: Promise<{
    project: string;
    mode: "add" | "edit";
    cualid: string;
    cuantid: string;
  }>
  searchParams: Promise<any>;
}

const page = async ({ params }: Props) => {
  const projectName = await decodeURIComponent((await params).project);
  const dropdownNeedsCualitative: any = await Promise.all([
    getAlianza(),
    getAuditorias(),
    getUseCases(),
    getComunity(),
    getFinance(),
    getTeamMembers(),
    getRoadmap(),
    getWhitepaper(),
  ]);
  const dropdownNeedsCuantitative: any = await Promise.all([
    getTokenomics(),
    getOnChain(),
    getFinanceCuant(),
    getExchanges(),
  ]);

  const resolvedParams = await params;
  const mode =
    resolvedParams.mode === "edit"
      ? resolvedParams.cualid === "0"
        ? "edit-cuant"
        : resolvedParams.cuantid === "0"
          ? "edit-cual"
          : "edit-both"
      : "add";
  const cualId = Number(resolvedParams.cualid);
  const cuantId = Number(resolvedParams.cuantid);
  console.log(mode);
  return (
    <>
      <ShowAverages />
      <div className="">
        <header className="my-10  md:flex justify-between items-center">
          <h1>
            {mode === "add" ? "Realiza" : "Editemos"} tu análisis -{" "}
            {projectName}
          </h1>
          <div className="">
            <Link href="/dashboard" className="mr-4">
              <span className="text-primary underline">Dashboard</span>
            </Link>
            <Link href="/analysis">
              <span className="text-primary underline">Página de análisis</span>
            </Link>
          </div>
        </header>

        <FormContainer
          data={[dropdownNeedsCualitative, dropdownNeedsCuantitative]}
          mode={mode}
          cualId={cualId}
          cuantId={cuantId}
        />
      </div>
    </>
  );
};

export default page;
