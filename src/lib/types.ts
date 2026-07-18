export type SubmissionStatus = "pending" | "contacted" | "completed" | "cancelled";

export interface Submission {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  province: string;
  user_id: string;
  municipality: string;
  neighborhood: string;
  services: string[];
  status: SubmissionStatus;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface Service {
  id: string;
  name: string;
  active: boolean;
  sort_order: number;
  created_at: string;
}

export const STATUS_LABELS: Record<SubmissionStatus, string> = {
  pending: "Pendente",
  contacted: "Contactado",
  completed: "Concluído",
  cancelled: "Cancelado",
};
