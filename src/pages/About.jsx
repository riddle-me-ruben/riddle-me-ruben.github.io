import { SectionHeading, Prose } from '../components/ui.jsx'
import { TEAM, PROJECT } from '../data/team.js'

function Avatar({ member }) {
  return (
    <div className="avatar avatar-lg">
      {member.photo ? <img src={member.photo} alt={member.name} /> : <span>{member.initials}</span>}
    </div>
  )
}

export default function About() {
  return (
    <div className="stack-lg">
      <SectionHeading
        eyebrow="Required page"
        title="About Us"
        description={`The five members managing ${PROJECT.name} for ${PROJECT.course}. Each member owns a specific part of this portal and is individually accountable for it.`}
      />

      <Prose>
        <p>
          Every member is expected to be able to explain any page of this portal during the final presentation
          Q&amp;A, not only the page they personally wrote.
        </p>
      </Prose>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {TEAM.map((m) => (
          <article key={m.id} className="card card-hover flex flex-col items-center p-6 text-center">
            <Avatar member={m} />

            <h3 className="mt-4 text-base font-semibold text-ink-50">{m.name}</h3>

            <p className="mt-3 text-sm leading-6 text-ink-300">
              {m.bioTodo ? <span className="todo-tag">{m.bio}</span> : m.bio}
            </p>

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
