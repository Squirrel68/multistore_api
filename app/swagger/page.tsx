"use client";
import React from "react";

import dynamic from "next/dynamic";
import "swagger-ui-react/swagger-ui.css";
import YAML from "yaml";
import { useEffect, useState } from "react";

const SwaggerUI = dynamic(() => import("swagger-ui-react"), { ssr: false });

export default function ApiDocs() {
  const [swaggerSpec, setSwaggerSpec] = useState<object | null>(null);

  useEffect(() => {
    fetch("/api/docs/yaml")
      .then((res) => res.text())
      .then((text) => setSwaggerSpec(YAML.parse(text)));
  }, []);

  return (
    <div>
      {swaggerSpec ? (
        <SwaggerUI spec={swaggerSpec} />
      ) : (
        <p>Loading Swagger...</p>
      )}
    </div>
  );
}
