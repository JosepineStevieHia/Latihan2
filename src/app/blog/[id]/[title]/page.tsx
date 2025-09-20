import BlogCard from "./components/BlogCard";

interface BlogDetailProps {
  params: { id: string; title: string };
}

export default function BlogDetail({ params }: BlogDetailProps) {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Detail Blog</h1>
      <BlogCard
        title={params.title}
        description={`Ini adalah blog dengan ID ${params.id}`}
      />
    </div>
  );
}
