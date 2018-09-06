export interface Project {
    id: number;
    name: string;
}

export interface Tracker {
    id: number;
    name: string;
}

export interface Status {
    id: number;
    name: string;
}

export interface Priority {
    id: number;
    name: string;
}

export interface Author {
    id: number;
    name: string;
}

export interface CustomField {
    id: number;
    name: string;
    value: string;
}

export interface Issue {
    id: number;
    project: Project;
    tracker: Tracker;
    status: Status;
    priority: Priority;
    author: Author;
    subject: string;
    description: string;
    done_ratio: number;
    custom_fields: CustomField[];
    created_on: Date;
    updated_on: Date;
    closed_on: Date;
    isAdd: boolean;
}

export interface     PageIssues {
    issues: Issue[];
    total_count: number;
    offset: number;
    limit: number;
}
