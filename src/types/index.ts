import { StaticImageData } from "next/image";

export interface Program {
    id: string;
    title: string;
    description: string;
    mentors?: number;
    status: 'active' | 'inactive';
    hostedBy?: string
}

export interface GroupCall {
    id: string;
    title: string;
    date: string;
    time: string;
    status: 'ongoing' | 'upcoming';
    participants: number;
    studyGroup: string;
}

export interface Mentor {
    id?: number;
    name?: string;
    email?: string;
    role?: string;
    country?: string;
    flag?: string;
    skills?: string[];
    pic: string;
}

export interface UserStats {
    total: number;
    students: number;
    mentors: number;
    programs: number;
    others: number;
}

export interface Activity {
    id: number;
    type: 'kyc' | 'signup' | 'withdrawal';
    message: string;
    time: string;
} 