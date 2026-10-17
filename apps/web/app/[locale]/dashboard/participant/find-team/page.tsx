import { TeamWorkspace } from "@/components/teams/team-workspace"
import { RoleGuard } from "@/components/role-guard"

export default function FindTeamPage() {
  return (
    <RoleGuard allowedRoles={["participant"]}>
      <TeamWorkspace discover />
    </RoleGuard>
  )
}
