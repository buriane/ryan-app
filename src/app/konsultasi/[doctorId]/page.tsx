import ChatClientPage from '@/components/ChatClientPage';

// This function is required for static site generation with dynamic routes
export function generateStaticParams() {
    // Create an array of all possible doctor IDs
    const doctorIds = [];
    for (let i = 1; i <= 42; i++) {
        doctorIds.push({ doctorId: i.toString() });
    }
    return doctorIds;
}

export default function ChatPage() {
    return <ChatClientPage />;
}