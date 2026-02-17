
export interface Tag {
    name: string;
    link: string;
    backgroundColor: string;
    color: string;
}

interface Link {
    name: string;
    href: string;
} 


export interface Project {
    name: string;
    description: string;
    tags: Tag[];
    image: any;
    links: Link[] ;
}

