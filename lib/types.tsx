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
                sm: {
                    1: string;
                    2: string;
                };
                med: {
                    1: string;
                    2: string;
                };
            };
            tablet: {
                med: {
                    1: string;
                    2: string;
                };

                lg: {
                    1: string;
                    2: string;
                };
            };
            desktop: {
                med: {
                    1: string;
                    2: string;
                };

                lg: {
                    1: string;
                    2: string;
                };
            };
        };
    };
}[];
