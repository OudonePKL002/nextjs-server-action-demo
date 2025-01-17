"use client";

import React, { useTransition } from 'react'
import { resetTodo } from '../_actions/todo-actions';

type Props = {}

export default function ResetButton({ }: Props) {
    const [_, startTransition] = useTransition();

    return (
        <button
            type='button'
            className='text-black mt-3 font-semibold rounded border border-gray-500'
            onClick={() => {
                startTransition(() => resetTodo());
            }}
        >
            Reset
        </button>
    )
}