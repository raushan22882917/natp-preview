
import { useNavigate, useSearchParams } from "react-router-dom";
import { AdminLayout } from "@/components/AdminLayout";
import { ArticleForm } from "@/components/ArticleForm";
import { TrademarkForm } from "@/components/TrademarkForm";
import { AdminForm } from "@/components/AdminForm";

export default function AdminCreate() {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type") || "articles";

  const renderForm = () => {
    switch (type) {
      case "articles":
        return <ArticleForm />;
      case "trademarks":
        return <TrademarkForm />;
      case "admins":
        return <AdminForm />;
      default:
        return <p>Select a type to create</p>;
    }
  };

  return (
    <AdminLayout title="Create New Item">
      <div className="p-6 bg-gray-50 min-h-screen">
        {renderForm()}
      </div>
    </AdminLayout>
  );
}
