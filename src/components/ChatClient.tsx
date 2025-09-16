"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft, Send } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';
import { motion } from 'framer-motion';
import { JadwalDokter } from '@/types';

// Define message type
interface Message {
    id: string;
    text: string;
    isUser: boolean;
    timestamp: Date;
}

interface ChatClientProps {
    doctorId: number;
}

export default function ChatClient({ doctorId }: ChatClientProps) {
    const router = useRouter();
    const { jadwalDokter } = useAppContext();

    // Find doctor by id
    const doctor = jadwalDokter.find(doc => doc.id === doctorId);

    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: doctor
                ? `Halo, saya ${doctor.nama}. Ada yang bisa saya bantu?`
                : 'Halo, ada yang bisa saya bantu dengan kesehatan gigi Anda?',
            isUser: false,
            timestamp: new Date()
        }
    ]);

    const [newMessage, setNewMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    // Auto-respond to user messages
    useEffect(() => {
        const lastMessage = messages[messages.length - 1];
        if (lastMessage && lastMessage.isUser) {
            setIsTyping(true);

            // Simulate doctor typing and responding
            const timer = setTimeout(() => {
                const responses = [
                    "Baik, terima kasih atas pertanyaannya. Mohon tunggu sebentar ya.",
                    "Untuk kasus tersebut, sebaiknya Anda datang ke klinik untuk pemeriksaan langsung.",
                    "Apakah ada keluhan lain yang ingin Anda sampaikan?",
                    "Berdasarkan informasi yang Anda berikan, saya sarankan untuk menjaga kebersihan gigi dengan menyikat gigi 2x sehari.",
                    "Jangan lupa untuk kontrol rutin setiap 6 bulan sekali ya."
                ];

                const randomResponse = responses[Math.floor(Math.random() * responses.length)];

                setMessages(prev => [...prev, {
                    id: Date.now().toString(),
                    text: randomResponse,
                    isUser: false,
                    timestamp: new Date()
                }]);

                setIsTyping(false);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [messages]);

    // Handle send message
    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();

        if (!newMessage.trim()) return;

        setMessages(prev => [...prev, {
            id: Date.now().toString(),
            text: newMessage,
            isUser: true,
            timestamp: new Date()
        }]);

        setNewMessage('');
    };

    // Format time
    const formatTime = (date: Date) => {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    if (!doctor) {
        // If doctor is not found, show a more user-friendly error page
        return (
            <motion.div
                className="flex flex-col items-center justify-center h-screen px-4 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Dokter Tidak Ditemukan</h2>
                <p className="text-gray-600 mb-6">Maaf, dokter dengan ID tersebut tidak ditemukan atau tidak tersedia.</p>
                <button
                    onClick={() => router.push('/konsultasi')}
                    className="px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition-colors"
                >
                    Kembali ke Halaman Konsultasi
                </button>
            </motion.div>
        );
    }

    return (
        <motion.div
            className="max-w-lg mx-auto bg-white rounded-lg shadow-lg overflow-hidden h-[calc(100vh-7rem)] pb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Chat header */}
            <div className="bg-sky-700 text-white p-4 flex items-center rounded-lg">
                <button
                    onClick={() => router.back()}
                    className="mr-4"
                    aria-label="Kembali"
                >
                    <ArrowLeft size={24} />
                </button>

                <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                    <Image
                        src={doctor.profileImg || "/profile.webp"}
                        alt={doctor.nama}
                        fill
                        sizes="40px"
                        style={{ objectFit: 'cover' }}
                    />
                </div>

                <div>
                    <h1 className="font-semibold">{doctor.nama}</h1>
                    <p className="text-xs opacity-80">{doctor.spesialisasi}</p>
                </div>
            </div>

            {/* Chat messages */}
            <div className="p-4 overflow-y-auto h-[calc(100%-8rem)] bg-white">
                {messages.map(message => (
                    <div
                        key={message.id}
                        className={`mb-4 flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`max-w-[75%] p-3 rounded-lg ${message.isUser
                                ? 'bg-sky-600 text-white rounded-tr-none'
                                : 'bg-white text-gray-800 shadow-sm rounded-tl-none'
                                }`}
                        >
                            <p>{message.text}</p>
                            <p className={`text-xs mt-1 ${message.isUser ? 'text-sky-100' : 'text-gray-500'}`}>
                                {formatTime(message.timestamp)}
                            </p>
                        </div>
                    </div>
                ))}

                {isTyping && (
                    <div className="flex justify-start mb-4">
                        <div className="bg-white p-3 rounded-lg shadow-sm max-w-[75%] rounded-tl-none">
                            <div className="flex space-x-2">
                                <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce"></div>
                                <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Message input */}
            <form onSubmit={handleSendMessage} className="p-4 border-t flex">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Ketik pesan..."
                    className="flex-1 border rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
                <button
                    type="submit"
                    className="bg-sky-600 text-white px-4 py-2 rounded-r-lg hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                    <Send size={20} />
                </button>
            </form>
        </motion.div>
    );
}