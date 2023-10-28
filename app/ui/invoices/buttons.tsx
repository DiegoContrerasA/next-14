'use client'
import { PencilIcon, PlusIcon, TrashIcon, CircleStackIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteInvoice } from '@/app/lib/actions';
import { useFormState, useFormStatus } from 'react-dom';
import { useEffect } from 'react';

export function CreateInvoice() {
  return (
    <Link
      href="/dashboard/invoices/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Invoice</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateInvoice({ id }: { id: string }) {
  return (
    <Link
    href={`/dashboard/invoices/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

const DeleteButton = () => {
  const {pending} = useFormStatus()
 return (
  <button className="rounded-md border p-2 hover:bg-gray-100" disabled={pending}>
  <span className="sr-only">Delete</span>
  {pending ? <CircleStackIcon className="w-5"  /> : <TrashIcon className="w-5" />}
</button>
 )
}


export function DeleteInvoice({ id }: { id: string }) {

  const INITIAL_STATE = {message: null, error: null}

  const [state, action] = useFormState(deleteInvoice, INITIAL_STATE)


  return (
    <form action={action}>
      <input type="hidden" name="id" value={id} />
      <DeleteButton />
    </form>
  );
}
