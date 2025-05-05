
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Upload, FileUp, FileText } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BulkTrademarkUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [csvText, setCsvText] = useState<string>("");
  const [isUploading, setIsUploading] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type === "text/csv") {
      setFile(selectedFile);
    } else {
      toast.error("Please select a valid CSV file");
      setFile(null);
      if (e.target) e.target.value = "";
    }
  };

  const handleCsvTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCsvText(e.target.value);
  };

  // Parse CSV string to array of objects
  const parseCSV = (csvString: string) => {
    // Split by lines and filter out empty lines
    const lines = csvString.split('\n').filter(line => line.trim() !== '');

    if (lines.length < 2) {
      throw new Error("CSV must contain a header row and at least one data row");
    }

    // Extract headers (first line)
    const headers = lines[0].split(',').map(header => header.trim());

    // Check if required headers exist
    if (!headers.includes('owner_name') || !headers.includes('application_number')) {
      throw new Error("CSV must include 'owner_name' and 'application_number' columns");
    }

    // Parse data rows
    const data = [];
    for (let i = 1; i < lines.length; i++) {
      // Handle quoted values with commas inside them
      const row = lines[i];
      const values = [];
      let inQuotes = false;
      let currentValue = '';

      for (let j = 0; j < row.length; j++) {
        const char = row[j];

        if (char === '"' && (j === 0 || row[j-1] !== '\\')) {
          inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
          values.push(currentValue.trim());
          currentValue = '';
        } else {
          currentValue += char;
        }
      }

      // Add the last value
      values.push(currentValue.trim());

      // Skip if row doesn't have enough values
      if (values.length !== headers.length) {
        console.warn(`Skipping row ${i+1}: incorrect number of values`);
        continue;
      }

      const rowObj: Record<string, string> = {};
      headers.forEach((header, index) => {
        // Remove quotes if present
        let value = values[index];
        if (value.startsWith('"') && value.endsWith('"')) {
          value = value.substring(1, value.length - 1);
        }
        rowObj[header] = value;
      });

      data.push(rowObj);
    }

    return data;
  };

  const handleUploadFile = async () => {
    if (!file) {
      toast.error("Please select a file first");
      return;
    }

    try {
      setIsUploading(true);

      const fileReader = new FileReader();

      fileReader.onload = async (event) => {
        try {
          const csvString = event.target?.result as string;
          const parsedData = parseCSV(csvString);

          if (parsedData.length === 0) {
            toast.error("No valid trademark data found in the CSV file");
            setIsUploading(false);
            return;
          }

          // Validate required fields
          const invalidItems = parsedData.filter(item =>
            !item.owner_name || !item.application_number
          );

          if (invalidItems.length > 0) {
            toast.error("Some trademarks are missing required fields: owner_name, application_number");
            setIsUploading(false);
            return;
          }

          // Format the data according to the database schema
          const trademarks = parsedData.map(item => ({
            owner_name: item.owner_name,
            application_number: item.application_number,
            national_classes: item.national_classes || null,
            application_date: item.application_date || null,
            description: item.description || null,
            logo_url: item.logo_url || null
          }));

          console.log("Uploading trademarks:", trademarks);

          // Insert all trademarks
          const { error } = await supabase
            .from("trademarks")
            .insert(trademarks);

          if (error) {
            console.error("Supabase error:", error);
            throw new Error(`Database error: ${error.message}`);
          }

          toast.success(`Successfully uploaded ${trademarks.length} trademarks`);
          navigate("/admin?tab=trademarks");

        } catch (error) {
          console.error("Error processing file:", error);
          toast.error(error instanceof Error ? error.message : "Failed to process the file");
        } finally {
          setIsUploading(false);
        }
      };

      fileReader.onerror = () => {
        toast.error("Failed to read the file");
        setIsUploading(false);
      };

      fileReader.readAsText(file);

    } catch (error) {
      console.error("Error uploading file:", error);
      toast.error(error instanceof Error ? error.message : "Failed to upload the file");
      setIsUploading(false);
    }
  };

  const handleUploadText = async () => {
    if (!csvText.trim()) {
      toast.error("Please enter CSV data first");
      return;
    }

    try {
      setIsUploading(true);

      try {
        const parsedData = parseCSV(csvText);

        if (parsedData.length === 0) {
          toast.error("No valid trademark data found in the CSV text");
          return;
        }

        // Validate required fields
        const invalidItems = parsedData.filter(item =>
          !item.owner_name || !item.application_number
        );

        if (invalidItems.length > 0) {
          toast.error("Some trademarks are missing required fields: owner_name, application_number");
          return;
        }

        // Format the data according to the database schema
        const trademarks = parsedData.map(item => ({
          owner_name: item.owner_name,
          application_number: item.application_number,
          national_classes: item.national_classes || null,
          application_date: item.application_date || null,
          description: item.description || null,
          logo_url: item.logo_url || null
        }));

        console.log("Uploading trademarks:", trademarks);

        // Insert all trademarks
        const { error } = await supabase
          .from("trademarks")
          .insert(trademarks);

        if (error) {
          console.error("Supabase error:", error);
          throw new Error(`Database error: ${error.message}`);
        }

        toast.success(`Successfully uploaded ${trademarks.length} trademarks`);
        navigate("/admin?tab=trademarks");

      } catch (error) {
        console.error("Error processing CSV text:", error);
        toast.error(error instanceof Error ? error.message : "Failed to process the CSV data");
      } finally {
        setIsUploading(false);
      }

    } catch (error) {
      console.error("Error uploading CSV text:", error);
      toast.error(error instanceof Error ? error.message : "Failed to upload the CSV data");
      setIsUploading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-xl font-semibold text-[#005ea2] mb-4">Bulk Upload Trademarks</h2>
      <p className="text-sm text-gray-500 mb-4">
        Upload trademarks in CSV format. Each trademark should have at least the owner_name and application_number fields.
      </p>

      <Tabs defaultValue="file" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="file" className="flex items-center gap-2">
            <FileUp className="w-4 h-4" />
            Upload CSV File
          </TabsTrigger>
          <TabsTrigger value="text" className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Enter CSV Data
          </TabsTrigger>
        </TabsList>

        <TabsContent value="file" className="mt-0">
          <div className="mb-4">
            <div className="flex gap-2 items-center mt-4">
              <Input
                type="file"
                accept=".csv"
                onChange={handleFileChange}
                className="flex-grow"
              />
              <Button
                onClick={handleUploadFile}
                disabled={!file || isUploading}
                className="bg-[#005ea2] hover:bg-[#207ea0] text-white"
              >
                <Upload className="w-4 h-4 mr-2" />
                {isUploading ? "Uploading..." : "Upload"}
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="text" className="mt-0">
          <div className="mb-4">
            <Textarea
              placeholder="Enter CSV data here..."
              className="min-h-[200px] font-mono text-sm"
              value={csvText}
              onChange={handleCsvTextChange}
            />
            <div className="flex justify-end mt-2">
              <Button
                onClick={handleUploadText}
                disabled={!csvText.trim() || isUploading}
                className="bg-[#005ea2] hover:bg-[#207ea0] text-white"
              >
                <Upload className="w-4 h-4 mr-2" />
                {isUploading ? "Uploading..." : "Upload"}
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-6">
        <h3 className="font-medium mb-2">CSV Format Example:</h3>
        <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto">
{`owner_name,application_number,national_classes,application_date,description
Company ABC,TMK123456,"35, 42",2023-05-15,Technology services
Business XYZ,TMK789012,"25, 28",2023-06-20,Clothing brand`}
        </pre>
        <p className="text-xs text-gray-500 mt-2">
          Note: The first row must contain column headers. The 'owner_name' and 'application_number' columns are required.
        </p>
      </div>
    </div>
  );
};

export default BulkTrademarkUpload;
