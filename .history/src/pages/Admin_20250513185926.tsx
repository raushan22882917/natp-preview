import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AdminLayout } from "@/components/AdminLayout";
import { AdminDataTable } from "@/components/AdminDataTable";
import { Button } from "@/components/ui/button";
import { Plus, Upload } from "lucide-react";
import BulkTrademarkUpload from "@/components/BulkTrademarkUpload";

type TableName = "admin_users" | "applications" | "contacts" | "trademarks" | "articles";

export default function Admin() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "trademarks";
  const showBulkUpload = searchParams.get("bulkUpload") === "true" && activeTab === "trademarks";

  const [trademarks, setTrademarks] = useState<any[]>([]);
  const [applications, setApplications] = useState<any[]>([]);
  const [contacts, setContacts] = useState<any[]>([]);
  const [admins, setAdmins] = useState<any[]>([]);
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAdmin = () => {
      const adminLoggedIn = localStorage.getItem("adminLoggedIn") === "true";
      if (!adminLoggedIn) {
        navigate("/admin-login");
        return;
      }
      fetchData();
    };

    checkAdmin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate, activeTab]);

  const fetchData = async () => {
    try {
      setLoading(true);

      const tables: { name: TableName; setter: (data: any[]) => void }[] = [
        { name: 'trademarks', setter: setTrademarks },
        { name: 'applications', setter: setApplications },
        { name: 'contacts', setter: setContacts },
        { name: 'admin_users', setter: setAdmins },
        { name: 'articles', setter: setArticles },
      ];

      // Only fetch data for the active tab to improve performance
      const activeTable = tables.find(table =>
        table.name === activeTab ||
        (activeTab === 'admins' && table.name === 'admin_users')
      );

      if (activeTable) {
        const { data, error } = await supabase
          .from(activeTable.name)
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        activeTable.setter(data || []);
      }

    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error("Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  const handleTabChange = (value: string) => {
    setSearchParams({ tab: value });
  };

  const handleCreate = () => {
    navigate(`/admin/create?type=${activeTab}`);
  };

  const handleBulkUpload = () => {
    setSearchParams({ tab: activeTab, bulkUpload: "true" });
  };

  const closeBulkUpload = () => {
    setSearchParams({ tab: activeTab });
  };

  const trademarkFields = [
    { name: 'owner_name', label: 'Owner Name', type: 'text' as const, required: true },
    { name: 'mark', label: 'Mark', type: 'text' as const },
    { name: 'application_number', label: 'Application Number', type: 'text' as const, required: true },
    { name: 'national_classes', label: 'National Classes', type: 'text' as const },
    { name: 'us_classes', label: 'US Classes', type: 'text' as const },
    { name: 'description', label: 'Description', type: 'textarea' as const },
    { name: 'application_date', label: 'Application Date', type: 'date' as const },
    { name: 'keywords', label: 'Keywords', type: 'text' as const },
    { name: 'logo_url', label: 'Logo URL', type: 'text' as const },
  ];

  const applicationFields = [
    { name: 'first_name', label: 'First Name', type: 'text' as const, required: true },
    { name: 'last_name', label: 'Last Name', type: 'text' as const, required: true },
    { name: 'email', label: 'Email', type: 'email' as const, required: true },
    { name: 'company', label: 'Company', type: 'text' as const, required: true },
    { name: 'trademark', label: 'Trademark', type: 'text' as const, required: true },
    { name: 'application_date', label: 'Application Date', type: 'date' as const },
  ];

  const contactFields = [
    { name: 'name', label: 'Name', type: 'text' as const, required: true },
    { name: 'email', label: 'Email', type: 'email' as const, required: true },
    { name: 'phone', label: 'Phone', type: 'text' as const },
    { name: 'subject', label: 'Subject', type: 'text' as const },
    { name: 'message', label: 'Message', type: 'textarea' as const, required: true },
    { name: 'status', label: 'Status', type: 'text' as const },
    { name: 'created_at', label: 'Date', type: 'date' as const },
  ];

  const adminFields = [
    { name: 'email', label: 'Email', type: 'email' as const, required: true },
  ];

  const articleFields = [
    { name: 'title', label: 'Title', type: 'text' as const, required: true },
    { name: 'content', label: 'Content', type: 'textarea' as const, required: true },
    { name: 'created_at', label: 'Date', type: 'date' as const },
  ];

  return (
    <AdminLayout title="Admin Dashboard">
      <div className="p-6">
        <Tabs defaultValue={activeTab} onValueChange={handleTabChange} className="w-full">
          <div className="flex justify-between items-center mb-6">
            <TabsList className="bg-white border border-gray-200 p-1 rounded-md overflow-x-auto flex-wrap">
              <TabsTrigger value="trademarks" className="data-[state=active]:bg-primary-blue data-[state=active]:text-white">
                Trademarks
              </TabsTrigger>
              <TabsTrigger value="applications" className="data-[state=active]:bg-primary-blue data-[state=active]:text-white">
                Applications
              </TabsTrigger>
              <TabsTrigger value="contacts" className="data-[state=active]:bg-primary-blue data-[state=active]:text-white">
                Contacts
              </TabsTrigger>
              <TabsTrigger value="articles" className="data-[state=active]:bg-primary-blue data-[state=active]:text-white">
                Articles
              </TabsTrigger>
              <TabsTrigger value="admins" className="data-[state=active]:bg-primary-blue data-[state=active]:text-white">
                Admin Users
              </TabsTrigger>
            </TabsList>

            <div className="flex gap-2">
              {activeTab === "trademarks" && !showBulkUpload && (
                <Button
                  onClick={handleBulkUpload}
                  className="bg-[#207ea0] hover:bg-[#005ea2] text-white"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Bulk Upload
                </Button>
              )}
              <Button
                onClick={handleCreate}
                className="bg-primary-blue hover:bg-[#207ea0] text-white"
              >
                <Plus className="w-4 h-4 mr-2" />
                Create New
              </Button>
            </div>
          </div>

          {showBulkUpload ? (
            <div className="mb-4">
              <Button
                variant="outline"
                onClick={closeBulkUpload}
                className="mb-4"
              >
                &larr; Back to Trademarks
              </Button>
              <BulkTrademarkUpload />
            </div>
          ) : (
            <>
              <TabsContent value="trademarks">
                <AdminDataTable
                  tableName="trademarks"
                  title="Trademarks"
                  data={trademarks}
                  fields={trademarkFields}
                  refreshData={fetchData}
                  loading={loading}
                />
              </TabsContent>

              <TabsContent value="applications">
                <AdminDataTable
                  tableName="applications"
                  title="Applications"
                  data={applications}
                  fields={applicationFields}
                  refreshData={fetchData}
                  loading={loading}
                />
              </TabsContent>

              <TabsContent value="contacts">
                <AdminDataTable
                  tableName="contacts"
                  title="Contact Messages"
                  data={contacts}
                  fields={contactFields}
                  refreshData={fetchData}
                  loading={loading}
                />
              </TabsContent>

              <TabsContent value="articles">
                <AdminDataTable
                  tableName="articles"
                  title="Articles"
                  data={articles}
                  fields={articleFields}
                  refreshData={fetchData}
                  loading={loading}
                />
              </TabsContent>

              <TabsContent value="admins">
                <AdminDataTable
                  tableName="admin_users"
                  title="Admin Users"
                  data={admins}
                  fields={adminFields}
                  refreshData={fetchData}
                  loading={loading}
                />
              </TabsContent>
            </>
          )}
        </Tabs>
      </div>
    </AdminLayout>
  );
}
