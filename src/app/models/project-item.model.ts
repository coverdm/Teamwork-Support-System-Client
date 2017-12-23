export class ProjectItem {

    projectId: string;
    projectProperties: ProjectProperties;

    constructor(projectId: string, projectProperties: ProjectProperties) {
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
