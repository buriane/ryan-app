"use client";

import { useParams } from 'next/navigation';
import ChatClient from '@/components/ChatClient';

export default function ClientPage() {
    const params = useParams();
    const doctorId = typeof params?.doctorId === 'string' ? parseInt(params.doctorId, 10) : 0;

    return <ChatClient doctorId={doctorId} />;
}