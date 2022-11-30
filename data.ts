type Project = {
    name: string;
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
}[];

export const projects: Project = [
    {
        name: "Manage",
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
    },
    {
        name: "Bookmark",
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
    },
    {
        name: "Insure",
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
    },
    {
        name: "Fylo",
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
    },
];
