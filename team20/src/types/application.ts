export enum ApplicationStatus {
    // submitted?
    reviewing = 0,
    accepted = 1,
    rejected = 2,
}

export type Application = {
    Application_ID?: number,
    Time_Submitted: Date,
    Application_Status: ApplicationStatus,
    Application_Document: Blob,
}