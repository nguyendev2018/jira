import { BaseService } from "./BaseService"

export class ProjectService extends BaseService {
    constructor() {
        super();
    }
    allProjectAuthorization = () => {
        return this.get(`Project/getAllProject`)
    }
    deleteProject = (removeId) => {
        return this.delete(`Project/deleteProject?projectId=${removeId}`)
    }
    getCategory = () => {
        return this.get(`ProjectCategory`)
    }
    createProjectAuthorization = (formCreate) => {
        return this.post(`Project/createProjectAuthorize`, formCreate)
    }
    updateProject = (formUpdate) => {
        return this.put(`Project/updateProject?projectId=${formUpdate.id}`, formUpdate)
    }
    getDetailProject = (projectId) => {
        return this.get(`Project/getProjectDetail?id=${projectId}`)
    }
}
export const projectService = new ProjectService()