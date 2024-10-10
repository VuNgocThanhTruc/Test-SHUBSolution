import { z } from 'zod';

export const validationSchema = z.object({
    time: z.string()
        .min(1, { message: 'Thời gian là bắt buộc.' })
        .transform((val) => new Date(val))
        .refine((date) => !isNaN(date.getTime()), {
            message: 'Thời gian không hợp lệ',
        }),

    quantity: z.number({ message: "Số lượng không hợp lệ" })
        .min(1, { message: 'Số lượng phải lớn hơn 0.' })
    ,
    unit: z.number({ message: "Chọn trụ là bắt buộc" }),

    revenue: z.number({ message: "Doanh thu không hợp lệ" })
        .min(0, { message: 'Doanh thu không được âm.' }),

    price: z.number({ message: "Giá không hợp lệ" })
        .min(0, { message: 'Giá không được âm.' }),
});
