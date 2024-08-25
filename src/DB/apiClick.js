import supabase from "./supabase";

export async function getClicksForUrls(urlids) {
  const { data, error } = await supabase
    .from("clicks")
    .select("*")
    .in("urlids", urlids);

  // const {data, error} = await supabase.auth.getUser();

  if (error) {
    console.error(error.message);
    throw new Error("Unable to load clicks");
  }
  return data;
}
