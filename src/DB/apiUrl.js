import supabase from "./supabase";

export async function getUrls(user_id) {
  const { data, error } = await supabase
    .from("urls")
    .select("*")
    .eq("user_id", user_id);

  // const {data, error} = await supabase.auth.getUser();

  if (error) {
    console.error(error.message)
    throw new Error("Unable to load urls");
  }
  return data;
}
