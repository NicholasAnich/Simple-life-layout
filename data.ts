type Project = {
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

export const projects: Project = [
    {
        id: 0,
        projectName: "Manage",
        type: "Interaction Design",
        engineer: "Front End Development",
        languages: ["HTML", "CSS", "JS"],
        background:
            "This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
        summary:
            "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.",
        images: {
            mobile: {
                sm: "/images/portfolio/mobile/image-portfolio-manage.jpg",
                med: "/images/portfolio/mobile/image-portfolio-manage@2x.jpg",
            },
            tablet: {
                med: "/images/portfolio/tablet/image-portfolio-manage.jpg",
                lg: "/images/portfolio/tablet/image-portfolio-manage@2x.jpg",
            },
            desktop: {
                med: "/images/portfolio/desktop/image-portfolio-manage.jpg",
                lg: "/images/portfolio/desktop/image-portfolio-manage@2x.jpg",
            },
        },
        details: {
            hero: {
                mobile: {
                    sm: "/images/detail/mobile/image-manage-hero.jpg",
                    med: "/images/detail/mobile/image-manage-hero@2x.jpg",
                },
                tablet: {
                    med: "/images/detail/tablet/image-manage-hero.jpg",
                    lg: "/images/detail/tablet/image-manage-hero@2x.jpg",
                },
                desktop: {
                    med: "/images/detail/desktop/image-manage-hero.jpg",
                    lg: "/images/detail/desktop/image-manage-hero@2x.jpg",
                },
            },
            preview: {
                mobile: {
                    sm: {
                        1: "/images/detail/mobile/image-manage-preview-1.jpg",
                        2: "/images/detail/mobile/image-manage-preview-2.jpg",
                    },
                    med: {
                        1: "/images/detail/mobile/image-manage-preview-1@2x.jpg",
                        2: "/images/detail/mobile/image-manage-preview-2@2x.jpg",
                    },
                },
                tablet: {
                    med: {
                        1: "/images/detail/tablet/image-manage-preview-1.jpg",
                        2: "/images/detail/tablet/image-manage-preview-2.jpg",
                    },
                    lg: {
                        1: "/images/detail/tablet/image-manage-preview-1@2x.jpg",
                        2: "/images/detail/tablet/image-manage-preview-2@2x.jpg",
                    },
                },
                desktop: {
                    med: {
                        1: "/images/detail/desktop/image-manage-preview-1.jpg",
                        2: "/images/detail/desktop/image-manage-preview-2.jpg",
                    },
                    lg: {
                        1: "/images/detail/desktop/image-manage-preview-1@2x.jpg",
                        2: "/images/detail/desktop/image-manage-preview-2@2x.jpg",
                    },
                },
            },
        },
    },
    {
        id: 1,
        projectName: "Bookmark",
        type: "Interaction Design",
        engineer: "Front End Development",
        languages: ["HTML", "CSS", "JS"],
        background:
            "This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
        summary:
            "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.",
        images: {
            mobile: {
                sm: "/images/portfolio/mobile/image-portfolio-bookmark.jpg",
                med: "/images/portfolio/mobile/image-portfolio-bookmark@2x.jpg",
            },
            tablet: {
                med: "/images/portfolio/tablet/image-portfolio-bookmark.jpg",
                lg: "/images/portfolio/tablet/image-portfolio-bookmark@2x.jpg",
            },
            desktop: {
                med: "/images/portfolio/desktop/image-portfolio-bookmark.jpg",
                lg: "/images/portfolio/desktop/image-portfolio-bookmark@2x.jpg",
            },
        },
        details: {
            hero: {
                mobile: {
                    sm: "/images/detail/mobile/image-bookmark-hero.jpg",
                    med: "/images/detail/mobile/image-bookmark-hero@2x.jpg",
                },
                tablet: {
                    med: "/images/detail/tablet/image-bookmark-hero.jpg",
                    lg: "/images/detail/tablet/image-bookmark-hero@2x.jpg",
                },
                desktop: {
                    med: "/images/detail/desktop/image-bookmark-hero.jpg",
                    lg: "/images/detail/desktop/image-bookmark-hero@2x.jpg",
                },
            },
            preview: {
                mobile: {
                    sm: {
                        1: "/images/detail/mobile/image-bookmark-preview-1.jpg",
                        2: "/images/detail/mobile/image-bookmark-preview-2.jpg",
                    },
                    med: {
                        1: "/images/detail/mobile/image-bookmark-preview-1@2x.jpg",
                        2: "/images/detail/mobile/image-bookmark-preview-2@2x.jpg",
                    },
                },
                tablet: {
                    med: {
                        1: "/images/detail/tablet/image-bookmark-preview-1.jpg",
                        2: "/images/detail/tablet/image-bookmark-preview-2.jpg",
                    },
                    lg: {
                        1: "/images/detail/tablet/image-bookmark-preview-1@2x.jpg",
                        2: "/images/detail/tablet/image-bookmark-preview-2@2x.jpg",
                    },
                },
                desktop: {
                    med: {
                        1: "/images/detail/desktop/image-bookmark-preview-1.jpg",
                        2: "/images/detail/desktop/image-bookmark-preview-2.jpg",
                    },
                    lg: {
                        1: "/images/detail/desktop/image-bookmark-preview-1@2x.jpg",
                        2: "/images/detail/desktop/image-bookmark-preview-2@2x.jpg",
                    },
                },
            },
        },
    },
    {
        id: 2,
        projectName: "Insure",
        type: "Interaction Design",
        engineer: "Front End Development",
        languages: ["HTML", "CSS", "JS"],
        background:
            "This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
        summary:
            "This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.",
        images: {
            mobile: {
                sm: "/images/portfolio/mobile/image-portfolio-insure.jpg",
                med: "/images/portfolio/mobile/image-portfolio-insure@2x.jpg",
            },
            tablet: {
                med: "/images/portfolio/tablet/image-portfolio-insure.jpg",
                lg: "/images/portfolio/tablet/image-portfolio-insure@2x.jpg",
            },
            desktop: {
                med: "/images/portfolio/desktop/image-portfolio-insure.jpg",
                lg: "/images/portfolio/desktop/image-portfolio-insure@2x.jpg",
            },
        },
        details: {
            hero: {
                mobile: {
                    sm: "/images/detail/mobile/image-insure-hero.jpg",
                    med: "/images/detail/mobile/image-insure-hero@2x.jpg",
                },
                tablet: {
                    med: "/images/detail/tablet/image-insure-hero.jpg",
                    lg: "/images/detail/tablet/image-insure-hero@2x.jpg",
                },
                desktop: {
                    med: "/images/detail/desktop/image-insure-hero.jpg",
                    lg: "/images/detail/desktop/image-insure-hero@2x.jpg",
                },
            },
            preview: {
                mobile: {
                    sm: {
                        1: "/images/detail/mobile/image-insure-preview-1.jpg",
                        2: "/images/detail/mobile/image-insure-preview-2.jpg",
                    },
                    med: {
                        1: "/images/detail/mobile/image-insure-preview-1@2x.jpg",
                        2: "/images/detail/mobile/image-insure-preview-2@2x.jpg",
                    },
                },
                tablet: {
                    med: {
                        1: "/images/detail/tablet/image-insure-preview-1.jpg",
                        2: "/images/detail/tablet/image-insure-preview-2.jpg",
                    },
                    lg: {
                        1: "/images/detail/tablet/image-insure-preview-1@2x.jpg",
                        2: "/images/detail/tablet/image-insure-preview-2@2x.jpg",
                    },
                },
                desktop: {
                    med: {
                        1: "/images/detail/desktop/image-insure-preview-1.jpg",
                        2: "/images/detail/desktop/image-insure-preview-2.jpg",
                    },
                    lg: {
                        1: "/images/detail/desktop/image-insure-preview-1@2x.jpg",
                        2: "/images/detail/desktop/image-insure-preview-2@2x.jpg",
                    },
                },
            },
        },
    },
    {
        id: 3,
        projectName: "Fylo",
        type: "Interaction Design",
        engineer: "Front End Development",
        languages: ["HTML", "CSS"],
        background:
            "This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
        summary:
            "This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.",
        images: {
            mobile: {
                sm: "/images/portfolio/mobile/image-portfolio-fylo.jpg",
                med: "/images/portfolio/mobile/image-portfolio-fylo@2x.jpg",
            },
            tablet: {
                med: "/images/portfolio/tablet/image-portfolio-fylo.jpg",
                lg: "/images/portfolio/tablet/image-portfolio-fylo@2x.jpg",
            },
            desktop: {
                med: "/images/portfolio/desktop/image-portfolio-fylo.jpg",
                lg: "/images/portfolio/desktop/image-portfolio-fylo@2x.jpg",
            },
        },
        details: {
            hero: {
                mobile: {
                    sm: "/images/detail/mobile/image-fylo-hero.jpg",
                    med: "/images/detail/mobile/image-fylo-hero@2x.jpg",
                },
                tablet: {
                    med: "/images/detail/tablet/image-fylo-hero.jpg",
                    lg: "/images/detail/tablet/image-fylo-hero@2x.jpg",
                },
                desktop: {
                    med: "/images/detail/desktop/image-fylo-hero.jpg",
                    lg: "/images/detail/desktop/image-fylo-hero@2x.jpg",
                },
            },
            preview: {
                mobile: {
                    sm: {
                        1: "/images/detail/mobile/image-fylo-preview-1.jpg",
                        2: "/images/detail/mobile/image-fylo-preview-2.jpg",
                    },
                    med: {
                        1: "/images/detail/mobile/image-fylo-preview-1@2x.jpg",
                        2: "/images/detail/mobile/image-fylo-preview-2@2x.jpg",
                    },
                },
                tablet: {
                    med: {
                        1: "/images/detail/tablet/image-fylo-preview-1.jpg",
                        2: "/images/detail/tablet/image-fylo-preview-2.jpg",
                    },
                    lg: {
                        1: "/images/detail/tablet/image-fylo-preview-1@2x.jpg",
                        2: "/images/detail/tablet/image-fylo-preview-2@2x.jpg",
                    },
                },
                desktop: {
                    med: {
                        1: "/images/detail/desktop/image-fylo-preview-1.jpg",
                        2: "/images/detail/desktop/image-fylo-preview-2.jpg",
                    },
                    lg: {
                        1: "/images/detail/desktop/image-fylo-preview-1@2x.jpg",
                        2: "/images/detail/desktop/image-fylo-preview-2@2x.jpg",
                    },
                },
            },
        },
    },
];
