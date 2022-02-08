export interface EmailRequest {
    senderEmail: string;
    receiverEmail: string;
    senderName?: string;
    subject?: string;
    body?: string;
}

export interface EmailResponse {
    errorMessage: string;
    hasError: boolean;
}