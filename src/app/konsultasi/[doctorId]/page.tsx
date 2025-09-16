import ChatClient from '@/components/ChatClient';

// This function is required for static site generation with dynamic routes
export function generateStaticParams() {
    // Create an array of all possible doctor IDs based on our knowledge of the data
    // We include IDs 1-42 to ensure we cover all doctors in the system
    const doctorIds = [];
    for (let i = 1; i <= 42; i++) {
        doctorIds.push({ doctorId: i.toString() });
    }

    return doctorIds;
}

export default async function ChatPage({ params }: { params: { doctorId: string } }) {
    // Use await to ensure params are resolved before accessing properties
    const doctorId = Number(await params.doctorId);

    return <ChatClient doctorId={doctorId} />;
}