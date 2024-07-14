import { useState } from "react";

interface AddtodoformProps {
    onSubmit: (title: string) => void;
}

export default function AddTodoForm({onSubmit}: AddtodoformProps) {
    const [input, setInput] = useState("");

    function handlesubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!input.trim()) return;
        onSubmit(input);
        setInput("");
    }

    return(
    <form className="flex" onSubmit={handlesubmit}>
        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="checking emails" className="rounded-s-md grow border border-gray-400 p-2"/>
        <button type="submit" className="rounded-e-md bg-slate-900 w-16 text-white hover:bg-slate-800">Add</button>
    </form>
    )
}