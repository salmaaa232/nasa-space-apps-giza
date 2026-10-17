import type { Profile } from '@prisma/client';

// Shared by participant search and team-member summaries. Never serialize a
// complete Prisma profile into a public/member response: projects may contain
// private contact information and have a separate mentor-sharing preference.
export function publicProfile(profile: Profile | null | undefined) {
  if (!profile?.isPublic || profile.hideFromSearch) return null;
  return {
    id: profile.id, userId: profile.userId, institution: profile.institution,
    academicLevel: profile.academicLevel, skills: profile.skills, bio: profile.bio,
    interests: profile.interests, desiredRole: profile.desiredRole,
    preferredChallenge: profile.preferredChallenge, teamStatus: profile.teamStatus,
  };
}
