// app/api/docs/route.ts
import { NextResponse } from "next/server";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import path from "path";

// Đọc file YAML từ thư mục "swagger"
const swaggerFile = path.join(process.cwd(), "swagger/api-doc-swagger.yml");
const swaggerSpec = YAML.load(swaggerFile);

export async function GET() {
  const html = swaggerUi.generateHTML(swaggerSpec);
  return new NextResponse(html, {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
