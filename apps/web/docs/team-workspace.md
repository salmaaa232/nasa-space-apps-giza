# Participant team workspace

Implemented on 17 October 2026 at `/en/dashboard/participant/team` and
`/en/dashboard/participant/find-team`, with equivalent Arabic routes.

Participants can create and edit a team, search teams, send a join request,
accept or decline an invitation, and leave a team. Leaders can invite registered
participants by email, approve or decline join requests, remove members, and
transfer leadership. A leader must transfer leadership before leaving a team
with other members. Leaving as the only member deletes the team after confirmation.

Both screens use the existing dashboard theme and support mobile layouts and RTL.
The landing page and shared visual components are unchanged. Invitations appear
inside the workspace; sending notification emails is not part of this milestone.
Refresh the page to see changes made by another participant.

Participant profiles include a required contact number when saving. Creating a
team, requesting membership, accepting an invitation, and taking leadership
require a valid saved number. Existing accounts without one are directed to their
profile. Formatted and Arabic-digit numbers are normalized before validation.

The join form shows the current leader's contact through an authenticated endpoint.
The receiving leader sees the applicant's number, bio, skills, interests,
experience, education, preferred role/challenge, and profile links directly in the
request. The form explains this sharing even for profiles hidden from public
search. Only the current leader receives applications; teammates can see their
own roster's phone numbers. Public team and profile listings omit phone numbers.

## API and integrity

- Browser requests use `/api/teams` on the web origin, forwarded to the configured
  API. Authentication uses the validated session cookie.
- `GET /teams/requests/me` returns the caller's pending invitations and join requests.
- `POST /teams/:id/invitations` supports an email address or the existing user ID.
  Responses expose only invitation metadata, not the invited user's account record.
- `POST /teams/:id/leadership` transfers leadership to an existing member.
- `GET /teams/:id/leader` returns current leader contact only after authentication.
- Existing team endpoints provide creation, search, details, approvals, and removal.
- Admissions, removals, and leadership changes use serializable transactions with
  bounded retries. Capacity checks happen in the same transaction as admission.
  The five-member cap applies to both invitations and join requests; the existing
  unique membership constraint keeps each participant in one team.
- Names are trimmed before DTO validation and require 3–50 characters.

## Verification

- Team service unit tests and four live database scenarios, including three
  simultaneous approvals competing for the fifth seat.
- Browser coverage for creation/edit persistence, invitations, approvals,
  permission-dependent controls, leadership transfer, leaving, search, pending
  requests, failed loads/saves, and English/Arabic layouts at 1440, 390, and 320px.
- A live three-account browser workflow verified the HTTP API, session cookies,
  and database persistence. Its disposable users and team were removed afterward.

## Recommended next milestone

Connect **Team tasks** to the existing task API: create tasks, assign teammates,
change status and due dates, and let leaders delete tasks. Then build the project
submission workflow with editing allowed until the configured deadline. These
are proposed next steps, not implemented features of this milestone.
