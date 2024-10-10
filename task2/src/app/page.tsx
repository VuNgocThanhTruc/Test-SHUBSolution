'use client'
import Header from "./components/Header";
import Main from "./components/Main";
import { useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { useFormState } from 'react-dom';
import { validationSchema } from "./components/schema";
import { formTransaction } from "./components/action";
import { Metadata } from "next";

export default function Home() {
  const [lastResult, action] = useFormState(formTransaction, undefined);

  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, { schema: validationSchema });
    },

    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
  });

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-lg">
      <form id={form.id} onSubmit={form.onSubmit} action={action} noValidate >
        <Header />
        <Main fields={fields} />
      </form>
    </div>
  );
}
