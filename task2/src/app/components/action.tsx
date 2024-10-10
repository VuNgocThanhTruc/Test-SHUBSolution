'use client';
import { parseWithZod } from '@conform-to/zod';
import { validationSchema } from '@/app/components/schema';
import { toast } from "sonner";

export async function formTransaction(prevState: unknown, formData: FormData) {
    const submission = parseWithZod(formData, {
        schema: validationSchema,
    });

    if (submission.status !== 'success') {
        return submission.reply();
    } else {
        toast.success(`Cập nhật thành công!`, {
            style: {
                backgroundColor: '#4caf50',
                color: '#fff',
            }
        })
    }
}