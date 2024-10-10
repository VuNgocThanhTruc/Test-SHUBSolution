'use client'
import { UploadFileData } from "./components/UploadFileData";
import { useState } from "react";
import QueryForm from "./components/QueryForm";

export default function Home() {
  const [data, setData] = useState<any[]>([]);


  return (
    <div className="container mx-auto p-4 flex justify-center flex-col">
      <h1 className="text-2xl font-bold mb-4 text-center">Giao dịch xăng dầu</h1>

      <UploadFileData setData={setData} />

      {data.length > 0 && <QueryForm data={data} />}
    </div>
  );
}
