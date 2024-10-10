import Link from "next/link";
import { FaArrowLeft, FaCalendarAlt } from "react-icons/fa";


export default function Header() {
    return (
        <div className="shadow-[0_4px_10px_-2px_rgba(0,0,0,0.1)] p-3">
            <div className="flex justify-between items-center">
                <Link href={'/'} className="flex items-center">
                    <FaArrowLeft className="mr-2" />
                    <p>Đóng</p>
                </Link>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                    Cập nhật
                </button>
            </div>
            <h1 className="text-2xl font-bold mb-4">Nhập giao dịch</h1>
        </div>
    );
}
