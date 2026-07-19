import "./section-heading.css";

type SectionHeadingProps = {
    eyebrow: string;
    title: string;
    subtitle?: string;
};

function SectionHeading({
    eyebrow,
    title,
    subtitle,
}: SectionHeadingProps) {
    return (
        <div className="section-heading">
            <span className="section-eyebrow">{eyebrow}</span>

            <h2>{title}</h2>

            {subtitle && <p>{subtitle}</p>}
        </div>
    );
}

export default SectionHeading;