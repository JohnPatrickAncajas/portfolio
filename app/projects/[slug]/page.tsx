// This component receives 'params' from the URL
export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div>
      {/* This will display the project's slug, e.g., "alisto-app" */}
      <h1>Project Details: {params.slug}</h1>

      <p>
        This is where the full description, screenshots, and technical details for
        the {params.slug} project will go.
      </p>

      <a href="#">View on GitHub</a>
      <br />
      <a href="#">View Live Demo</a>
    </div>
  );
}