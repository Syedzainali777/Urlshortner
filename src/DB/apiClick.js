import supabase from "./supabase";

export async function getClicksForUrls(urlids) {
  const { data, error } = await supabase
    .from("clicks")
    .select("*")
    .in("url_id", urlids);

  // const {data, error} = await supabase.auth.getUser();

  if (error) {
    console.error(error.message);
    throw new Error("Unable to load clicks");
  }
  return data;
}

export const storeClicks = async ({orignalUrl }) => {
  try {
    // Redirect to the original URL
    window.location.href = orignalUrl;
  } catch (error) {
    console.error("Error recording click:", error);
  }
};
