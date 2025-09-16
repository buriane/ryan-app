"use client";

import ChatClient from './ChatClient';

interface ChatWrapperProps {
    doctorId: number;
}

export default function ChatWrapper({ doctorId }: ChatWrapperProps) {
    return <ChatClient doctorId={doctorId} />;
}