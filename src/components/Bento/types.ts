export interface Profile {
    name: string;
    avatar: string;
    location: string;
    email: string;
    contact: string;
    header: string[];
    about: string[];
    socials: SocialLinks;
}

export interface SocialLinks {
    youtube: string;
    github: string;
    discord: string;
    x: string;
}

export interface BlockProps {
    className?: string;
    children?: React.ReactNode;
    whileHover?: {
        rotate: string;
        scale: number;
    };
}
