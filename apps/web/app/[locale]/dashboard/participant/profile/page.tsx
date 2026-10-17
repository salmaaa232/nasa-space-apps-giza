import { ParticipantProfilePage } from "@/components/profile/participant-profile"
import { RoleGuard } from "@/components/role-guard"

export default function ProfilePage() {
  return (
    <RoleGuard allowedRoles={["participant"]}>
      <ParticipantProfilePage />
    </RoleGuard>
  )
}
