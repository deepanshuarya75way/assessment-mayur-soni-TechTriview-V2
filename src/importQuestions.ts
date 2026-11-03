
import dotenv from "dotenv";
import { ConvexHttpClient } from "convex/browser";
import { api } from "../convex/_generated/api";
import { CODING_QUESTIONS } from "./constants";

dotenv.config({ path: ".env.local" });

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;

if (!convexUrl) {
  throw new Error(
    "NEXT_PUBLIC_CONVEX_URL is missing from .env.local"
  );
}

const convex = new ConvexHttpClient(convexUrl);

async function importQuestions() {
  try {
    const result = await convex.mutation(
      api.seed.importCodingQuestions,
      {
        questions: CODING_QUESTIONS,
      }
    );

    console.log("Import completed successfully!");
    console.log(result);
  } catch (error) {
    console.error("Import failed:", error);
    process.exitCode = 1;
  }
}

importQuestions();
