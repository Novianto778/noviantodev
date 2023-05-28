export default function ProjectLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <main className="pt-content">{children}</main>;
}
