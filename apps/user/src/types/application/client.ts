export type ApplicationStep = 'STUDENT_AND_PARENT' | 'TEACHER';

export interface Application {
    start: string;
    place: string;
    applicationStartDate: string;
    applicationEndDate: string;
    status: string;
}
