import { TeamWorkspace } from "@/components/teams/team-workspace"
import { RoleGuard } from "@/components/role-guard"

export default function TeamPage() {
  return (
    <RoleGuard allowedRoles={["participant"]}>
      <TeamWorkspace />
    </RoleGuard>
  )
}
