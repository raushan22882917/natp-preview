import { Link } from "react-router-dom";
import { format } from "date-fns";
import { Share2, Printer, Copy, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

export type TrademarkDetail = {
  id: string;
  owner_name: string;
  application_number: string;
  national_classes?: string;
  application_date?: string;
  description?: string;
  logo_url?: string;
  read_time?: string;
};

interface TrademarkArticleProps {
  trademark: TrademarkDetail;
}

export function TrademarkArticle({ trademark }: TrademarkArticleProps) {
  const getFirstLetter = (name: string) => {
    return name ? name.charAt(0).toUpperCase() : 'A';
  };

  return (
    <article className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
      {/* Article Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-blue-600 mb-2">
          <Link to="/" className="text-sm hover:underline">Articles</Link>
          <span className="text-sm">{trademark.read_time || '5 min read'}</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">{trademark.owner_name}</h1>

        {/* Trademark Logo Box */}
        <div className="w-full h-[240px] border border-blue-200 rounded-lg flex items-center justify-center mb-6">
          <div className="text-[150px] text-gray-700 font-bold">
            {getFirstLetter(trademark.owner_name)}
          </div>
        </div>

        {/* Trademark Details */}
        <div className="flex flex-wrap gap-y-2 text-sm border-b border-gray-200 pb-4">
          <div className="w-full md:w-1/2 flex">
            <span className="font-semibold text-gray-700 mr-2">Owner:</span>
            <span>{trademark.owner_name}</span>
          </div>
          <div className="w-full md:w-1/2 flex">
            <span className="font-semibold text-gray-700 mr-2">Classes:</span>
            <span>{trademark.national_classes || 'N/A'}</span>
          </div>
          <div className="w-full md:w-1/2 flex">
            <span className="font-semibold text-gray-700 mr-2">Application Number:</span>
            <span>{trademark.application_number}</span>
          </div>
          <div className="w-full md:w-1/2 flex">
            <span className="font-semibold text-gray-700 mr-2">Application Date:</span>
            <span>
              {trademark.application_date
                ? format(new Date(trademark.application_date), "MMM d, yyyy")
                : 'N/A'}
            </span>
          </div>
        </div>

        {/* Share Icons */}
        <div className="flex gap-3 mt-4">
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
            <Share2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
            <Printer className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
            <Copy className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
            <Facebook className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Article Content */}
      <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-center mb-6">Introduction</h2>

        <p className="mb-4">
          <strong>{trademark.owner_name}</strong> is a name that resonates with excellence both in and off the field. As one of the most iconic figures in NFL history, {trademark.owner_name} has captivated fans with exceptional talent, sportsmanship, and leadership. Beyond athletic achievements, {trademark.owner_name} has made a significant impact as an entrepreneur and philanthropist, leaving a lasting legacy of excellence and empowerment.
        </p>

        <p className="mb-4">
          At the heart of {trademark.owner_name}'s mission is a commitment to excellence and innovation. With a relentless work ethic and unwavering dedication to craft, {trademark.owner_name} has achieved numerous successes and records throughout a illustrious career. From worldwide acclaim to stellar performances in key moments, {trademark.owner_name} has solidified a position as one of the greatest players to ever grace the gridiron.
        </p>

        <p className="mb-4">
          One of the key strengths of {trademark.owner_name} lies in an entrepreneurial spirit and vision. In addition to success on the field, {trademark.owner_name} has ventured into the business world, leveraging platform and influence to create opportunities for growth and others. As a savvy businessperson, {trademark.owner_name} has demonstrated an ability to translate athletic success into commercial ventures with remarkable acumen.
        </p>

        <p className="mb-4">
          {trademark.owner_name} is deeply committed to giving back to the community and making a positive impact in the lives of others. Through philanthropic efforts, including the {trademark.owner_name} Foundation and {trademark.owner_name} Fund, {trademark.owner_name} has provided support and resources to countless individuals and organizations in need. From education and youth development to health and wellness initiatives, {trademark.owner_name}'s charitable work has touched the lives of many and created lasting positive change.
        </p>

        <p className="mb-4">
          In addition to athletic and entrepreneurial pursuits, {trademark.owner_name} is also a devoted family man and role model. With a strong sense of integrity and humility, {trademark.owner_name} leads by example both on and off the field, inspiring others to strive for greatness and make a difference in the world. As {trademark.owner_name} continues to make an impact on the world, the legacy of excellence and empowerment serves as a beacon of inspiration for generations to come.
        </p>

        <p className="mb-4">
          With a traditional background representing the commitment to greatness, {trademark.owner_name}'s impact extends far beyond the playing field, touching the lives of fans, entrepreneurs, and communities worldwide.
        </p>
      </div>

      {/* Article Tags */}
      <div className="mt-12 pt-6 border-t border-gray-200">
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" className="rounded-full text-xs px-4 py-1 h-auto">Brand Success</Button>
          <Button variant="outline" className="rounded-full text-xs px-4 py-1 h-auto">Trademark Awareness</Button>
          <Button variant="outline" className="rounded-full text-xs px-4 py-1 h-auto">Marketing Excellence</Button>
          <Button variant="outline" className="rounded-full text-xs px-4 py-1 h-auto">Industry Leader</Button>
        </div>
      </div>
    </article>
  );
}
