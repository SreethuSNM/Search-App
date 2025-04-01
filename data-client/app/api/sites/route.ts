import { NextRequest, NextResponse } from "next/server";
import { WebflowClient } from "webflow-api";
import jwt from "../../lib/utils/jwt";


/*
    Sites API Route
    ---------------
    This route handles the GET request from the client to retrieve the list of sites associated with the user.
*/

export async function GET(request: NextRequest) {
  try {
    // Clone the request since we need to read the body twice
    const clonedRequest = request.clone() as NextRequest;

    // Verify the user is authenticated by checking the session token
    const accessToken = await jwt.verifyAuth(clonedRequest);

    // If the user is not authenticated, return a 401 Unauthorized response
    if (!accessToken) {
      console.log("No access token found, unauthorized");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Create a new Webflow client with the Access Token
    const webflow = new WebflowClient({ accessToken });

    // Log the Access Token to make sure it is correct
    console.log("Access Token:", accessToken);

    // Get the list of sites associated with the user
    const response = await webflow.sites.list();

    // Log the response to understand its structure
    console.log("Webflow API Response:", response);

    // Check if the response has a `sites` property (or another structure)
    if (!response || !response.sites || response.sites.length === 0) {
      console.error("No sites found or error fetching sites.");
      return NextResponse.json({ error: "No sites found or error fetching sites" }, { status: 404 });
    }

    // If successful, return the list of sites to the client
    return NextResponse.json({ data: response.sites });
  } catch (error: any) {
    // Log any errors for debugging purposes
    console.error("Error handling authenticated request:", error);

    // If an error occurs, return a 500 Internal Server Error response
    if (error?.response) {
      console.error("Webflow API Error Response:", error.response);
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
