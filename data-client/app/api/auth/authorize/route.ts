import { WebflowClient } from "webflow-api";
import { NextResponse } from "next/server";
import { OauthScope } from "webflow-api/api/types/OAuthScope";

/**
 * Authorize API Route Handler
 * --------------------------
 * This route generates and redirects to Webflow's authorization URL.
 */

const scopes = [
  "sites:read",
  "sites:write",
  "authorized_user:read",
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  console.log("Client ID:", process.env.WEBFLOW_CLIENT_ID);
  if (!process.env.WEBFLOW_CLIENT_ID) {
    console.error("WEBFLOW_CLIENT_ID is not defined.");
    return NextResponse.json({ error: "Missing WEBFLOW_CLIENT_ID" }, { status: 500 });
  }

  console.log("Client ID:", process.env.WEBFLOW_CLIENT_ID);
  


  const isDesigner = searchParams.get("state") === "webflow_designer";

  const authorizeUrl = WebflowClient.authorizeURL({
    scope: scopes as OauthScope[],
    clientId: process.env.WEBFLOW_CLIENT_ID!,
    state: isDesigner ? "webflow_designer" : undefined,
  });

  return NextResponse.redirect(authorizeUrl);
}
