import { useState } from "react";

export default function QueryForm({ data }: { data: any[] }) {
    const [startTime, setStartTime] = useState("2024-03-21T18:40");
    const [endTime, setEndTime] = useState("2024-03-21T18:50");
    const [totalAmount, setTotalAmount] = useState<number | null>(null);

    const handleQuery = () => {
        const filteredData = data.filter((row: any) => {
            const dateString = row['__EMPTY'];
            const timeString = row['__EMPTY_1'];

            const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;
            if (!datePattern.test(dateString)) {
                return false;
            }

            const [day, month, year] = dateString.split("/");
            const formattedDate = `${year}-${month}-${day}`;
            const dateTimeString = `${formattedDate}T${timeString}`;

            const time = new Date(dateTimeString).getTime();
            const start = new Date(startTime).getTime();
            const end = new Date(endTime).getTime();

            return time >= start && time <= end;
        });

        const total = filteredData.reduce(
            (sum, row) =>
                sum + parseFloat(row["__EMPTY_7"] || 0), 0
        );

        setTotalAmount(total);
    };

    return (
        <div className="flex flex-col items-center">
            <div className="group">
                <label
                    htmlFor="price"
                    className="mr-2"
                >
                    Thời gian từ
                </label>
                <input
                    type="datetime-local"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="mb-2 p-2 border border-gray-300 rounded"
                    placeholder="Thời gian từ"
                />
            </div>
            <div className="group">
                <label
                    htmlFor="price"
                    className="mr-2"
                >
                    Thời gian đến
                </label>
                <input
                    type="datetime-local"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    className="mb-2 p-2 border border-gray-300 rounded"
                    placeholder="Thời gian đến"
                />
            </div>

            <button
                onClick={handleQuery}
                className="bg-blue-500 text-white p-2 rounded"
            >
                Thành tiền
            </button>

            {totalAmount !== null && (
                <p className="mt-4 text-lg">Tổng: {totalAmount.toLocaleString()} VND</p>
            )}
        </div>
    );
}
