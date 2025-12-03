import React from "react";

type SocialButtonProps = {
    href: string;
    label: string;
    children: React.ReactNode
};

export default function SocialButton({href, label, children}: SocialButtonProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="btn"
            >
            {children}
            <span className="font-medium">{label}</span>
        </a>
    );
}