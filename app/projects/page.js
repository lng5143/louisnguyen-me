import { Badge } from "@/components/ui/badge";
import { Table, TableRow, TableCell, TableHeader, TableBody } from "@/components/ui/table";
import PROJECTS from "@/data/projects";
import Link from "next/link";

export default function ProjectsPage() {

    
    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
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