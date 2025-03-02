import { NextResponse } from "next/server";
import { readFileSync } from "fs";
import { join } from "path";

export async function GET() {
  const filePath = join(process.cwd(), "public/swagger/api-doc-swagger.yml");
  const fileContent = readFileSync(filePath, "utf-8");

  return new NextResponse(fileContent, {
    headers: { "Content-Type": "text/yaml" },
  });
}
