import api from "@/lib/axios";
import { dashboardProjectSchema, ProjectFormData } from "@/types/index";
import { isAxiosError } from "axios";

const controller = "/projects";

export async function createProject(formData: ProjectFormData) {
  try {
    const { data } = await api.post(controller, formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export async function getProjects() {
  try {
    // no se puso api.get ya que por default viene el "get"
    const { data } = await api(controller);
    const response = dashboardProjectSchema.safeParse(data);
    if (response.success) {
      return response.data;
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}
