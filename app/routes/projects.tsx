import type { Route } from "./+types/home";
import "./projects.css";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Projects | isatsam.dev" },
        { name: "description", content: "isatsam.dev" },
    ];
}

export default function Portfolio() {
    return (
        <>
            <h1 className="underscore">Projects</h1>
            <p>Selected open-source things I've built.</p>
            <hr />
            <div className="portfolio">
                {
                    projects.map((p) => (
                        <Project key={p.name} {...p} />
                    )
                    )
                }
            </div>
        </>
    );
}

interface ProjectProp {
    href: string,
    name: string,
    tools: string,
    description: string,
    bulletpoints: string[]
}

function Project({ href, name, tools, description, bulletpoints }: ProjectProp) {
    return (
        <div className="project-wrapper">
            <div className="project-image">
                <a href={`/assets/projects/${name}.webp`}>
                    <img src={`/assets/projects/${name}.webp`} />
                </a>
            </div>
            <article className="project">
                <h1 className="project-name">{name}</h1>
                <a href={`https://${href}`} className="project-link">{href}</a>
                <p className="project-tools"><span className="project-tools-span">Tools:</span> {tools}</p>
                <p className="project-description">{description}</p>
                <details className="project-highlights">
                    <summary>Project highlights</summary>
                    <ul>
                        {bulletpoints.map((point: string, index: number) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                </details>
            </article>
        </div >
    )
}

const projects = [
    {
        href: "kana.tiger.place",
        name: "KanaChampion",
        tools: "React, TypeScript, AWS, Github Actions",
        description: "React.js-based trainer for Japanese hiragana and katakana. Supports local progress tracking. Hosted with AWS Amplify",
        bulletpoints: [
            "Built a gamified learning tool for Japanese kana (hiragana/katakana) with streaks mechanics to keep learners returning",
            "Implemented saving progress locally, handling various progress metrics (best score, longest streak)",
            "Deployed to AWS with continuous deployment via GitHub Actions and a custom domain/HTTPS configuration with CloudFlare DNS"
        ]
    },
    {
        href: "makerspace.tiger.place",
        name: "Makerspace",
        tools: "Python, Flask, TypeScript, React, Docker, AWS",
        description: "BSc in IT Capstone - business management web app for a university's makerspace. Deployed on AWS's ECS/Fargate",
        bulletpoints: [
            "Delivered a unified platform for automating or simplifying essential business workflows (booking, equipment and resource management), replacing manual processes with a centralized digital system",
            "Designed and implemented a modular, layered system with React.js (TypeScript), Flask (Python)",
            "Deployed the containerised application to AWS ECS Fargate, managing container images in ECR and configuring VPC networking, security groups, and IAM task-execution roles for public internet access",
            "Diagnosed and resolved production infrastructure issues end-to-end via the AWS CLI, including container networking (ENIs, subnets, security groups), image delivery (ECR), and application observability through CloudWatch Logs",
            "Defined the full application infrastructure as code with Terraform (HCL)"
        ]
    },
    {
        href: "github.com/isatsam/vfs_explorer",
        name: "VFS Explorer",
        tools: "Python, PyQT, GitHub Actions",
        description: "Low-footprint library for interacting with Ice-Pick Lodge's proprietary VFS asset packs, complete with an intuitive cross-platform GUI",
        bulletpoints: [
            "Developed a powerful, intuitive, and cross-platform graphical tool for videogame mod-making enthusiasts",
            "Designed a low footprint Python library for parsing and extracting proprietary video game asset pack, allowing other developers to easily access the contents of the proprietary asset packs via the library's API",
            "Built a simple, intuitive, and predictable QT-based graphical UI",
            "Set up a GitHub Actions-based pipeline to automatically produce executable files for Linux and Windows",
            "Received media coverage in cybersecurity magazine xakep.ru"
        ]
    },
    {
        href: "github.com/isatsam/tigerSSG",
        name: "tigerSSG",
        tools: "Go",
        description: "Tiny static site generator (SSG) written in Go",
        bulletpoints: [
            "Developed a static site generator (SSG) based on html/template and yuin/goldmark libraries",
            "optimised the Markdown-to-HTML conversion to handle ~200 pages within 400ms",
            "implemented secure upload workflows with crypto library"
        ]
    },
    {
        href: "github.com/isatsam/homeserverstats",
        name: "statsapi",
        tools: "Go",
        description: "Websocket-based API for displaying some of the stats of a Linux device in real time",
        bulletpoints: [
            "Developed an API to display live stats of a Linux web server on a website page",
            "Utilised async programming to support the Websocket protocol",
            "Optimised the binary executable to 7.5 MiB including all dependencies"
        ]
    },
    {
        href: "github.com/isatsam/isatsam.dev",
        name: "isatsam.dev",
        tools: "React, TypeScript, Docker",
        description: "This website",
        bulletpoints: []
    },
    {
        href: "tiger.place",
        img: "../assets/projects/tiger.place.webp",
        name: "tiger.place",
        tools: "Linux, Docker, Nginx",
        description: "Public-facing part of my homeserver",
        bulletpoints: [
            "Set up Nginx reverse proxy for easy static site hosting: creating a sub-directory within the project will allocate *.tiger.place subdomain with the same name and make the contents of the sub-directory publicly accessible",
            "Hosting several services for a small userbase (1-3 users) via Docker containers"
        ]
    },
    {
        href: "github.com/isatsam/photoshop-on-linux",
        name: "photoshop-on-linux",
        tools: "Bash",
        description: "Currently inactive project to get modern Adobe Photoshop running on Linux via compatibility tools",
        bulletpoints: []
    },
    {
        href: "github.com/isatsam/cs50",
        name: "Harvard CS50 Coursework",
        tools: "C, Python",
        description: "Various small projects written for Harvard university's online CS50x (Intro to Computer Science) and CS50w (Python Web Development) courses",
        bulletpoints: []
    }
]
