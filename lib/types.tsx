export type Project = {
    id: number;
    projectName: string;
    type: string;
    engineer: string;
    languages: string[];
    background: string;
    summary: string;
    images: {
        mobile: {
            sm: string;
            med: string;
        };
        tablet: {
            med: string;
            lg: string;
        };
        desktop: {
            med: string;
            lg: string;
        };
    };
    details: {
        hero: {
            mobile: {
                sm: string;
                med: string;
            };
            tablet: {
                med: string;
                lg: string;
            };
            desktop: {
                med: string;
                lg: string;
            };
        };
        preview: {
            mobile: {
                sm: string;
                med: string;
            };
            tablet: {
                med: string;
                lg: string;
            };
            desktop: {
                med: string;
                lg: string;
            };
        };
    };
}[];
