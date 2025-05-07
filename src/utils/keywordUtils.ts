import { supabase } from "@/integrations/supabase/client";

/**
 * Updates keywords for a trademark in the database
 * @param trademarkId The ID of the trademark to update
 * @param keywords Array of keywords to save
 * @returns Object with success status and error message if applicable
 */
/**
 * Updates keywords for a trademark in the database
 * @param trademarkId The ID of the trademark to update
 * @param keywords Array of keywords to save
 * @returns Object with success status and error message if applicable
 */
export const updateTrademarkKeywords = async (
  trademarkId: string,
  keywords: string[]
): Promise<{ success: boolean; error?: string }> => {
  try {
    // Validate input
    if (!trademarkId) {
      return { success: false, error: "Trademark ID is required" };
    }

    // Ensure keywords is an array with max 5 items
    const validKeywords = Array.isArray(keywords)
      ? keywords.slice(0, 5)
      : [];

    // Update the trademark with the keywords array
    // The database schema has a keywords column of type text[]
    const { error } = await supabase
      .from('trademarks')
      .update({
        keywords: validKeywords
      })
      .eq('id', trademarkId);

    if (error) {
      console.error('Error updating keywords:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error('Unexpected error updating keywords:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred"
    };
  }
};

/**
 * Gets available keywords for trademark selection
 * @returns Array of predefined keywords
 */
export const getAvailableKeywords = (): string[] => {
  return [
    "Brand Success",
    "Trademark Awareness",
    "Marketing Excellence",
    "Industry Leader",
    "Innovation",
    "Customer Satisfaction",
    "Global Reach",
    "Quality Products",
    "Sustainability",
    "Market Leadership",
    "Brand Recognition",
    "Consumer Trust"
  ];
};

/**
 * Toggles a keyword in an array of keywords
 * @param currentKeywords Current array of keywords
 * @param keyword Keyword to toggle
 * @param maxKeywords Maximum number of keywords allowed (default: 5)
 * @returns New array of keywords and a message if max limit is reached
 */
export const toggleKeyword = (
  currentKeywords: string[],
  keyword: string,
  maxKeywords: number = 5
): { keywords: string[]; message?: string } => {
  // Create a copy of the current keywords
  const keywordsCopy = [...currentKeywords];

  // Check if the keyword is already in the array
  const keywordIndex = keywordsCopy.indexOf(keyword);

  if (keywordIndex !== -1) {
    // Remove the keyword if it exists
    keywordsCopy.splice(keywordIndex, 1);
    return { keywords: keywordsCopy };
  } else {
    // Add the keyword if it doesn't exist and we're under the limit
    if (keywordsCopy.length < maxKeywords) {
      keywordsCopy.push(keyword);
      return { keywords: keywordsCopy };
    } else {
      // Return the original array and a message if we're at the limit
      return {
        keywords: keywordsCopy,
        message: `You can select a maximum of ${maxKeywords} keywords`
      };
    }
  }
};
