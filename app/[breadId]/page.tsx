import { notFound } from "next/navigation";

import { getBreadById, getBreadsFromDB } from "@/api";

interface BasebreadPageProps {
  params: { breadId: string };
}

export async function generateStaticParams() {
  const breads = await getBreadsFromDB();

  const params = breads.map((bread) => ({
    breadId: bread.id,
  }));

  return params;
}

export default async function ProductDetailPage({
  params,
}: BasebreadPageProps) {
  const { breadId } = params;

  const breadData = await getBreadById(breadId);
  if (!breadData) {
    notFound();
  }

  return (
    <>
      <h1>{breadData.name}</h1>
      <p>{breadData.price}</p>
    </>
  );
}
