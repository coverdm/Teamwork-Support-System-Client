export class ProjectItem {

    projectId: ProjectId;
    projectProperties: ProjectProperties;

    constructor(projectId: ProjectId, projectProperties: ProjectProperties) {
        this.projectId = projectId;
        this.projectProperties = projectProperties;
    }
}

export class ProjectProperties {
    name: string;
    description: string;

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }
}

export class ProjectId {
    uuid: string;
}
