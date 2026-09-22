import { SectionHeading } from '../components/ui.jsx'
import { TEAM, PROJECT } from '../data/team.js'

function Avatar({ member }) {
  return (
    <div className="avatar avatar-lg">
      {member.photo ? (
        <img
          src={member.photo}
          alt={member.name}
          style={{ objectFit: 'cover', objectPosition: member.photoPosition || 'center' }}
        />
      ) : (
        <span>{member.initials}</span>
      )}
    </div>
  )
}

export default function About() {
  return (
    <div className="stack-lg">
      <SectionHeading
        eyebrow="Our team"
        title="About Us"
        description={`Meet the team building ${PROJECT.name}.`}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {TEAM.map((m) => (
          <article key={m.id} className="card card-hover flex min-w-0 flex-col items-center p-5 text-center">
            <Avatar member={m} />

            <h3 className="mt-4 text-base font-semibold text-ink-50">{m.name}</h3>

            {m.bio && <p className="mt-3 text-sm leading-6 text-ink-300">{m.bio}</p>}

            <div className="mt-auto w-full pt-5">
              <p className="label mb-1.5">Owns</p>
              <p className="text-sm text-ink-200">{m.owns}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
