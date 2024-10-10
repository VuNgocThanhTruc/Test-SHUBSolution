import { useState } from "react";
import { toast, Toaster } from "sonner";
import * as XLSX from "xlsx";

export const UploadFileData = ({ setData }: { setData: Function }) => {

    const [file, setFile] = useState<File | null>(null);

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFile(file);
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = new Uint8Array(e.target?.result as ArrayBuffer);
                const workbook = XLSX.read(data, { type: "array" });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const jsonData = XLSX.utils.sheet_to_json(worksheet);
                setData(jsonData);
                toast.success(`Upload file: ${file.name} thành công!`, {
                    style: {
                        backgroundColor: '#4caf50',
                        color: '#fff',
                    }
                })
            };
            reader.readAsArrayBuffer(file);
        }
    };

    return (
        <div className="flex flex-col items-center">
            <input
                type="file"
                accept=".xlsx"
                onChange={handleFileUpload}
                className="mb-2"
            />
            {file &&
                <Toaster position="bottom-center" />
            }
        </div>
    );
}