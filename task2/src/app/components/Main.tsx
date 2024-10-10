'use client'
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';
import "../../../styles/main.css"
import { Toaster } from 'sonner';

interface TransactionObj {
    time: Date;
    quantity: number;
    unit: number;
    revenue: number;
    price: number;
}

export default function Main({ fields }: { fields: any }) {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
    const [transaction, setTransaction] = useState<TransactionObj>({
        time: new Date(),
        quantity: 0,
        unit: 0,
        revenue: 0,
        price: 0,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;


        setTransaction((prevTransaction) => ({
            ...prevTransaction,
            [name]: name === "time" ? new Date(value) : parseFloat(value) || value,
        }));
    };

    return (
        <div className="space-y-4">
            {/* Time */}
            <div className="relative z-10 w-full group">
                <div className='pb-1 pt-5 mt-6 px-2 w-full text-sm text-gray-900 bg-transparent border rounded-md border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'>
                    <DatePicker
                        selected={selectedDate}
                        onChange={(date: Date | null) => setSelectedDate(date)}
                        showTimeSelect
                        className='w-full border-none focus:outline-none focus:ring-0'
                        dateFormat="dd/MM/yyyy HH:mm:ss"
                        required
                        key={fields.time.key}
                        name={fields.time.name}
                    />
                    <FaCalendarAlt className="absolute right-3 top-3 text-gray-400" />
                </div>
                <label
                    htmlFor="time"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-2.5 translate-x-2 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2.5"
                >
                    Thời gian
                </label>
                <div className="text-red-500 text-xs mt-1">{fields.time.errors}</div>
            </div>

            {/* Quantity */}
            <div className="relative z-0 w-full group">
                <input
                    type="number"
                    id="quantity"
                    className="block pb-1 pt-5 mt-6 px-2 w-full text-sm text-gray-900 bg-transparent border rounded-md border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    onChange={handleInputChange}
                    value={transaction.quantity}
                    key={fields.quantity.key}
                    name={fields.quantity.name}
                />
                <label
                    htmlFor="quantity"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-2.5 translate-x-2 scale-75 top-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2.5"
                >
                    Số lượng
                </label>
                <div className="text-red-500 text-xs mt-1">{fields.quantity.errors}</div>
            </div>

            {/* Unit */}
            <div className='relative z-0 w-full group'>
                <select
                    id="unit"
                    className="block pb-1 pt-5 mt-6 px-2 w-full text-sm text-gray-900 bg-transparent border rounded-md border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    value={transaction.unit}
                    onChange={handleInputChange}
                    key={fields.unit.key}
                    name={fields.unit.name}
                >
                    <option></option>
                    <option value={1}>Shub1</option>
                    <option value={2}>Shub2</option>
                </select>
                <label htmlFor="unit"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-2.5 translate-x-2 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2.5"
                >Trụ</label>
                <div className="text-red-500 text-xs mt-1">{fields.unit.errors}</div>
            </div>

            {/* Revenue */}
            <div className="relative z-0 w-full group">
                <input
                    type="number"
                    id="revenue"
                    className="block pb-1 pt-5 mt-6 px-2 w-full text-sm text-gray-900 bg-transparent border rounded-md border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    value={transaction.revenue}
                    key={fields.revenue.key}
                    name={fields.revenue.name}
                    onChange={handleInputChange}
                />
                <label
                    htmlFor="revenue"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-2.5 translate-x-2 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2.5"
                >
                    Doanh thu
                </label>
                <div className="text-red-500 text-xs mt-1">{fields.revenue.errors}</div>
            </div>

            {/* Price */}
            <div className="relative z-0 w-full group">
                <input
                    type="number"
                    id="price"
                    className="block pb-1 pt-5 mt-6 px-2 w-full text-sm text-gray-900 bg-transparent border rounded-md border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    value={transaction.price}
                    key={fields.price.key}
                    name={fields.price.name}
                    onChange={handleInputChange}
                />
                <label
                    htmlFor="price"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-2.5 translate-x-2 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2.5"
                >
                    Đơn giá
                </label>
                <div className="text-red-500 text-xs mt-1">{fields.price.errors}</div>
            </div>
            <Toaster position="bottom-center" />
        </div>
    );
}
