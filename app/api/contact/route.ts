// The contact form now submits to Web3Forms (a static-friendly form backend),
// so this server route is no longer used. With `output: export` we keep only a
// static GET so the static build succeeds. Safe to delete once your dev server
// is stopped (it currently has a file lock preventing removal here).
export const dynamic = "force-static";

export async function GET() {
  return new Response(
    JSON.stringify({ service: "contact", status: "static" }),
    { headers: { "content-type": "application/json" } }
  );
}
