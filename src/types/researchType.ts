// src/types/research.ts
export interface Book {
    id?: string;
    authors?: string;
    title?: string;
    publisher?: string;
    year?: number;
    isbn?: string;
    link?: string;
    remark?: string;
}

export interface Paper {
    id?: string;
    authors?: string;
    title?: string;
    journal?: string;
    status?: string;
}

export interface Patent {
    id?: string;
    inventors?: string;
    title?: string;
    patent_number?: string;
    date?: string;
    status?: string;
}

export interface ResearchData {
    books?: Book[];
    papers?: Paper[];
    patents?: Patent[];
}
