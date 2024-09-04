import { Badge } from "@/components/ui/badge";
import { Table, TableRow, TableCell, TableHeader, TableBody } from "@/components/ui/table";
import PROJECTS from "@/data/projects";

export default function ProjectsPage() {

    
    return (
        <div className="flex flex-col gap-10">
            <h1 className="text-2xl">A complete list of all the projects I am working on</h1>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Tech Stack</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Revenue</TableCell>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {PROJECTS.map((project) => (
                        <TableRow key={project.name}>
                            <TableCell><a href={project.url} target="_blank" rel="noopener noreferrer">{project.name}</a></TableCell>
                            <TableCell>{project.description}</TableCell>
                            <TableCell>
                                <div className="flex gap-1 flex-wrap">
                                    {project.techStack.map((tech, ind) => <Badge variant="default" key={ind}>{tech}</Badge>)}
                                </div>
                            </TableCell>
                            <TableCell>
                                {project.status === 1 ? (
                                    <Badge variant="live">Live</Badge>
                                ) : project.status === 2 ? (
                                    <Badge variant="building">Building</Badge>
                                ) : project.status === 3 ? (
                                    <Badge variant="failed">Failed</Badge>
                                ) : (
                                    <Badge variant="outline">Unknown</Badge>
                                )}
                            </TableCell>
                            <TableCell>{project.revenue}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}