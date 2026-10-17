ALTER TABLE "profiles"
  ADD COLUMN "share_projects_with_mentors" BOOLEAN NOT NULL DEFAULT true,
  ADD COLUMN "hide_from_search" BOOLEAN NOT NULL DEFAULT false;

CREATE INDEX "profiles_matching_visibility_idx" ON "profiles" ("is_public", "hide_from_search", "updated_at" DESC);
