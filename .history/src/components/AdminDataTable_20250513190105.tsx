
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, Pencil, Trash } from "lucide-react";

type Field = {
  name: string;
  label: string;
  type: 'text' | 'date' | 'email' | 'textarea';
  required?: boolean;
};

type RowData = Record<string, any>;

// Define the exact table names allowed in the database
type TableName = "admin_users" | "applications" | "contacts" | "trademarks" | "articles" | "newsletter_subscriptions";

type AdminDataTableProps = {
  tableName: TableName;
  title: string;
  data: RowData[];
  fields: Field[];
  refreshData: () => void;
  loading: boolean;
};

export const AdminDataTable = ({
  tableName,
  title,
  data,
  fields,
  refreshData,
  loading,
}: AdminDataTableProps) => {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<RowData | null>(null);
  const [formData, setFormData] = useState<RowData>({});

  const handleEdit = (item: RowData) => {
    setCurrentItem(item);
    setFormData(item);
    setIsEditDialogOpen(true);
  };

  const handleDelete = (item: RowData) => {
    setCurrentItem(item);
    setIsDeleteDialogOpen(true);
  };

  const handleView = (item: RowData) => {
    setCurrentItem(item);
    setIsViewDialogOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      if (!currentItem) return;

      const { error } = await supabase
        .from(tableName)
        .update(formData)
        .eq('id', currentItem.id);

      if (error) throw error;

      toast.success(`${title} updated successfully`);
      setIsEditDialogOpen(false);
      refreshData();
    } catch (error: any) {
      console.error("Error updating item:", error);
      toast.error(`Failed to update: ${error.message}`);
    }
  };

  const handleConfirmDelete = async () => {
    try {
      if (!currentItem) return;

      const { error } = await supabase
        .from(tableName)
        .delete()
        .eq('id', currentItem.id);

      if (error) throw error;

      toast.success(`${title} deleted successfully`);
      setIsDeleteDialogOpen(false);
      refreshData();
    } catch (error: any) {
      console.error("Error deleting item:", error);
      toast.error(`Failed to delete: ${error.message}`);
    }
  };

  const renderColumns = () => {
    return (
      <>
        {fields.map(field => (
          <TableHead key={field.name} className="text-gray-600">{field.label}</TableHead>
        ))}
        <TableHead className="text-right text-gray-600">Actions</TableHead>
      </>
    );
  };

  const renderRows = () => {
    return data.map((item) => (
      <TableRow key={item.id} className="hover:bg-gray-50 transition h-16">
        {fields.map(field => (
          <TableCell
            key={`${item.id}-${field.name}`}
            className="text-gray-800 truncate max-w-[200px]"
          >
            {field.name === 'logo_url' && item[field.name] ? (
              <div className="flex items-center">
                <div className="w-10 h-10 mr-2 border border-gray-200 rounded overflow-hidden flex items-center justify-center">
                  <img
                    src={item[field.name]}
                    alt="Logo"
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='3' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Ccircle cx='8.5' cy='8.5' r='1.5'%3E%3C/circle%3E%3Cpolyline points='21 15 16 10 5 21'%3E%3C/polyline%3E%3C/svg%3E";
                    }}
                  />
                </div>
                {/* Only show "View Image" link for URLs, not for base64 data */}
                {item[field.name].startsWith('http') && (
                  <span className="text-xs text-blue-600 hover:underline cursor-pointer" onClick={() => window.open(item[field.name], '_blank')}>
                    View Image
                  </span>
                )}
              </div>
            ) : field.name === 'keywords' && item[field.name] ? (
              <div className="flex flex-wrap gap-1">
                {Array.isArray(item[field.name]) ?
                  item[field.name].map((keyword: string, idx: number) => (
                    <span key={idx} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                      {keyword}
                    </span>
                  )) :
                  String(item[field.name] || '-')
                }
              </div>
            ) : field.type === 'date' && item[field.name] ? (
              new Date(item[field.name]).toLocaleDateString()
            ) : field.type === 'textarea' && item[field.name] ? (
              <div className="max-h-[100px] overflow-y-auto">
                {String(item[field.name] || '-')}
              </div>
            ) : (
              String(item[field.name] || '-')
            )}
          </TableCell>
        ))}
        <TableCell className="text-right">
          <div className="flex justify-end gap-2">
            <Button
              variant="outline"
              size="icon"
              className="border-gray-300 hover:border-primary-blue hover:bg-primary-blue hover:text-white transition"
              onClick={() => handleView(item)}
            >
              <Eye className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-gray-300 hover:border-primary-blue hover:bg-primary-blue hover:text-white transition"
              onClick={() => handleEdit(item)}
            >
              <Pencil className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-red-300 text-red-500 hover:bg-red-100 hover:text-red-700 transition"
              onClick={() => handleDelete(item)}
            >
              <Trash className="h-4 w-4" />
            </Button>
          </div>
        </TableCell>
      </TableRow>
    ));
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-primary-blue mb-8">{title}</h2>

      {loading ? (
        <p className="text-gray-500 italic">Loading {title.toLowerCase()}...</p>
      ) : (
        <div className="overflow-x-auto max-h-[600px]">
          <Table className="w-full">
            <TableHeader className="sticky top-0 bg-white z-10">
              <TableRow>
                {renderColumns()}
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.length > 0 ? (
                renderRows()
              ) : (
                <TableRow>
                  <TableCell colSpan={fields.length + 1} className="text-center py-10 text-gray-500">
                    No {title.toLowerCase()} found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      )}

      {/* View Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-primary-blue">View {title}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-6 py-4">
            {currentItem && fields.map((field) => (
              <div key={field.name} className="grid gap-2">
                <Label className="font-medium text-gray-700">
                  {field.label}
                </Label>
                <div className="p-2 bg-gray-50 rounded-md min-h-[40px] whitespace-pre-wrap break-words">
                  {field.name === 'logo_url' && currentItem[field.name] ? (
                    <div className="flex flex-col items-start gap-2">
                      <div className="w-full max-w-[200px] h-[200px] border border-gray-200 rounded overflow-hidden flex items-center justify-center">
                        <img
                          src={currentItem[field.name]}
                          alt="Logo"
                          className="max-w-full max-h-full object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='3' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Ccircle cx='8.5' cy='8.5' r='1.5'%3E%3C/circle%3E%3Cpolyline points='21 15 16 10 5 21'%3E%3C/polyline%3E%3C/svg%3E";
                          }}
                        />
                      </div>
                      {/* Only show link for URLs, not for base64 data */}
                      {currentItem[field.name].startsWith('http') ? (
                        <a
                          href={currentItem[field.name]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline text-sm"
                        >
                          {currentItem[field.name]}
                        </a>
                      ) : (
                        <span className="text-gray-500 text-sm">
                          Base64 image data (too long to display)
                        </span>
                      )}
                    </div>
                  ) : field.name === 'keywords' && currentItem[field.name] ? (
                    <div className="flex flex-wrap gap-1">
                      {Array.isArray(currentItem[field.name]) ?
                        currentItem[field.name].map((keyword: string, idx: number) => (
                          <span key={idx} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                            {keyword}
                          </span>
                        )) :
                        String(currentItem[field.name] || '-')
                      }
                    </div>
                  ) : field.type === 'date' && currentItem[field.name] ? (
                    new Date(currentItem[field.name]).toLocaleDateString()
                  ) : field.type === 'textarea' && currentItem[field.name] ? (
                    <div className="whitespace-pre-wrap">
                      {String(currentItem[field.name] || '-')}
                    </div>
                  ) : (
                    String(currentItem[field.name] || '-')
                  )}
                </div>
              </div>
            ))}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsViewDialogOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[450px] rounded-lg">
          <DialogHeader>
            <DialogTitle className="text-primary-blue">Edit {title}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-6 py-6">
            {fields.map((field) => (
              <div key={field.name} className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor={field.name} className="text-right text-gray-700">
                  {field.label}
                </Label>
                {field.name === 'logo_url' ? (
                  <div className="col-span-3 space-y-2">
                    {/* For base64 data, don't show the input field, just the image */}
                    {formData[field.name] && !formData[field.name].startsWith('http') ? (
                      <div className="space-y-2">
                        <div className="text-sm text-gray-500">Base64 image data (cannot be edited directly)</div>
                        <div className="w-full max-w-[150px] h-[150px] border border-gray-200 rounded overflow-hidden flex items-center justify-center mt-2">
                          <img
                            src={formData[field.name]}
                            alt="Logo Preview"
                            className="max-w-full max-h-full object-contain"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='3' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Ccircle cx='8.5' cy='8.5' r='1.5'%3E%3C/circle%3E%3Cpolyline points='21 15 16 10 5 21'%3E%3C/polyline%3E%3C/svg%3E";
                            }}
                          />
                        </div>
                      </div>
                    ) : (
                      <>
                        <Input
                          id={field.name}
                          name={field.name}
                          type="text"
                          value={formData[field.name] || ''}
                          onChange={handleInputChange}
                          className="w-full"
                          required={field.required}
                        />
                        {formData[field.name] && (
                          <div className="w-full max-w-[150px] h-[150px] border border-gray-200 rounded overflow-hidden flex items-center justify-center mt-2">
                            <img
                              src={formData[field.name]}
                              alt="Logo Preview"
                              className="max-w-full max-h-full object-contain"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='3' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Ccircle cx='8.5' cy='8.5' r='1.5'%3E%3C/circle%3E%3Cpolyline points='21 15 16 10 5 21'%3E%3C/polyline%3E%3C/svg%3E";
                              }}
                            />
                          </div>
                        )}
                      </>
                    )}
                  </div>
                ) : field.name === 'keywords' ? (
                  <div className="col-span-3 space-y-2">
                    <div className="text-sm text-gray-500 mb-2">
                      Enter keywords separated by commas (e.g., "Brand Success, Innovation")
                    </div>
                    <Input
                      id={field.name}
                      name={field.name}
                      type="text"
                      value={Array.isArray(formData[field.name]) ? formData[field.name].join(', ') : formData[field.name] || ''}
                      onChange={(e) => {
                        const value = e.target.value;
                        const keywordsArray = value.split(',').map(k => k.trim()).filter(k => k);
                        setFormData(prev => ({ ...prev, [field.name]: keywordsArray }));
                      }}
                      className="w-full"
                      required={field.required}
                    />
                    {Array.isArray(formData[field.name]) && formData[field.name].length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {formData[field.name].map((keyword: string, idx: number) => (
                          <span key={idx} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                            {keyword}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ) : field.type === 'textarea' ? (
                  <textarea
                    id={field.name}
                    name={field.name}
                    value={formData[field.name] || ''}
                    onChange={handleInputChange}
                    className="col-span-3 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-blue focus:outline-none min-h-[100px]"
                    required={field.required}
                  />
                ) : (
                  <Input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    value={formData[field.name] || ''}
                    onChange={handleInputChange}
                    className="col-span-3"
                    required={field.required}
                  />
                )}
              </div>
            ))}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button className="bg-primary-blue hover:bg-primary-blue/90 text-white" onClick={handleSave}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[425px] rounded-lg">
          <DialogHeader>
            <DialogTitle className="text-red-500">Confirm Deletion</DialogTitle>
          </DialogHeader>
          <p className="py-4 text-gray-700">
            Are you sure you want to delete this {title.toLowerCase()}? This action cannot be undone.
          </p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleConfirmDelete}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
