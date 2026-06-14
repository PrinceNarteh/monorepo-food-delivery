import type { HealthCheckResponse } from "@food-delivery/types";
import { api } from "@/lib/axios";

export const checkHealth = () =>
  api.get<HealthCheckResponse>("/health").then((res) => res.data);
