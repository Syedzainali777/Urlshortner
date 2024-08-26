import supabase from "./supabase";
import { UAParser } from "ua-parser-js";

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
const parser = new UAParser();

export const storeClicks = async ({ id, orignalUrl }) => {
  try {
    const res = parser.getResult();
    const device = res.type || "desktop"; // Default to desktop if type is not detected

    const response = await fetch("https://ipapi.co/json");
    const { city, country_name: country } = await response.json();

    // Record the click
    await supabase.from("clicks").insert({
      url_id: id,
      city: city,
      country: country,
      device: device,
    });

    // Redirect to the original URL
    window.location.href = orignalUrl;
  } catch (error) {
    console.error("Error recording click:", error);
  }
};
