import { useEffect, useMemo, useState } from 'react'
import { Plus, GripVertical, X, ChevronDown, Trash2, Kanban } from 'lucide-react'
import { Card, Badge, SectionHeading } from '../components/ui.jsx'
import { TEAM, memberById } from '../data/team.js'

const STORAGE_KEY = 'lpp-kanban-board-v1'

const COLUMNS = [
  { id: 'backlog', label: 'Backlog', dot: 'bg-slate-400' },
  { id: 'todo', label: 'To Do', dot: 'bg-navy-500' },
  { id: 'inprogress', label: 'In Progress', dot: 'bg-accent-500' },
  { id: 'done', label: 'Done', dot: 'bg-emerald-500' },
]

const PRIORITY_TONE = { High: 'red', Med: 'yellow', Low: 'green' }
const CATEGORIES = ['Frontend', 'Backend', 'AI/ML', 'Security', 'DevOps', 'QA', 'Governance']

const DEFAULT_TASKS = [
  { id: 't1', title: 'Design student self-service portal UI', assignee: 'aaf', points: 5, priority: 'High', category: 'Frontend', status: 'inprogress' },
  { id: 't2', title: 'Build advisor case triage dashboard', assignee: 'sao', points: 8, priority: 'High', category: 'Frontend', status: 'todo' },
  { id: 't3', title: 'Implement RESTful case API', assignee: 'rjm', points: 5, priority: 'Med', category: 'Backend', status: 'inprogress' },
  { id: 't4', title: 'Train baseline recommendation model', assignee: 'smlc', points: 13, priority: 'High', category: 'AI/ML', status: 'todo' },
  { id: 't5', title: 'Set up bias monitoring pipeline', assignee: 'smlc', points: 8, priority: 'High', category: 'Governance', status: 'backlog' },
  { id: 't6', title: 'Configure CI/CD deployment pipeline', assignee: 'bnu', points: 5, priority: 'Med', category: 'DevOps', status: 'done' },
  { id: 't7', title: 'FERPA data-handling audit', assignee: 'smlc', points: 3, priority: 'High', category: 'Governance', status: 'backlog' },
  { id: 't8', title: 'SSO / SCIM provisioning integration', assignee: 'bnu', points: 8, priority: 'Med', category: 'Security', status: 'backlog' },
  { id: 't9', title: 'Write end-to-end regression suite', assignee: 'sao', points: 5, priority: 'Low', category: 'QA', status: 'todo' },
  { id: 't10', title: 'Sprint 3 velocity retrospective', assignee: 'aaf', points: 2, priority: 'Low', category: 'Governance', status: 'done' },
]

function loadTasks() {
  if (typeof window === 'undefined') return DEFAULT_TASKS
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return DEFAULT_TASKS
    const parsed = JSON.parse(raw)
    if (Array.isArray(parsed) && parsed.length) return parsed
    return DEFAULT_TASKS
  } catch {
    return DEFAULT_TASKS
  }
}

function TaskCard({ task, onDragStart, onStatusChange, onDelete }) {
  const member = memberById(task.assignee)
  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, task.id)}
      className="group cursor-grab rounded-lg border border-slate-200 bg-white p-3 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-cardHover active:cursor-grabbing dark:border-navy-800 dark:bg-navy-900"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-start gap-1.5">
          <GripVertical size={14} className="mt-0.5 shrink-0 text-slate-300 dark:text-navy-700" />
          <p className="text-sm font-medium leading-snug text-navy-900 dark:text-slate-100">{task.title}</p>
        </div>
        <button
          onClick={() => onDelete(task.id)}
          aria-label="Delete task"
          className="shrink-0 rounded p-0.5 text-slate-300 opacity-0 transition-opacity hover:text-rose-500 group-hover:opacity-100 dark:text-navy-700"
        >
          <Trash2 size={14} />
        </button>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        <Badge tone={PRIORITY_TONE[task.priority]}>{task.priority}</Badge>
        <Badge tone="navy">{task.points} pts</Badge>
        <Badge tone="slate">{task.category}</Badge>
      </div>

      <div className="mt-3 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5">
          {member && (
            <span
              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white ${member.color}`}
              title={member.name}
            >
              {member.initials}
            </span>
          )}
          <span className="truncate text-xs text-slate-500 dark:text-slate-400">{member?.name.split(' ')[0]}</span>
        </div>

        <div className="relative">
          <select
            value={task.status}
            onChange={(e) => onStatusChange(task.id, e.target.value)}
            className="appearance-none rounded-md border border-slate-200 bg-slate-50 py-1 pl-2 pr-6 text-xs font-medium text-navy-700 outline-none focus:border-accent-400 dark:border-navy-700 dark:bg-navy-800 dark:text-slate-200"
          >
            {COLUMNS.map((c) => (
              <option key={c.id} value={c.id}>
                {c.label}
              </option>
            ))}
          </select>
          <ChevronDown size={12} className="pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2 text-slate-400" />
        </div>
      </div>
    </div>
  )
}

function NewTaskModal({ onClose, onCreate }) {
  const [title, setTitle] = useState('')
  const [assignee, setAssignee] = useState(TEAM[0].id)
  const [points, setPoints] = useState(3)
  const [priority, setPriority] = useState('Med')
  const [category, setCategory] = useState(CATEGORIES[0])
  const [status, setStatus] = useState('backlog')

  const submit = (e) => {
    e.preventDefault()
    if (!title.trim()) return
    onCreate({
      id: `t${Date.now()}`,
      title: title.trim(),
      assignee,
      points: Number(points),
      priority,
      category,
      status,
    })
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/50 p-4" onClick={onClose}>
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={submit}
        className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-5 shadow-cardHover dark:border-navy-800 dark:bg-navy-900"
      >
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-base font-semibold text-navy-900 dark:text-slate-100">New Task</h3>
          <button type="button" onClick={onClose} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
            <X size={18} />
          </button>
        </div>

        <div className="space-y-3">
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-500 dark:text-slate-400">Task Title</label>
            <input
              autoFocus
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Implement notification service"
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-navy-900 outline-none focus:border-accent-400 dark:border-navy-700 dark:bg-navy-800 dark:text-slate-100"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-500 dark:text-slate-400">Assignee</label>
              <select
                value={assignee}
                onChange={(e) => setAssignee(e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-navy-900 outline-none focus:border-accent-400 dark:border-navy-700 dark:bg-navy-800 dark:text-slate-100"
              >
                {TEAM.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-500 dark:text-slate-400">Story Points</label>
              <select
                value={points}
                onChange={(e) => setPoints(e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-navy-900 outline-none focus:border-accent-400 dark:border-navy-700 dark:bg-navy-800 dark:text-slate-100"
              >
                {[1, 2, 3, 5, 8, 13, 21].map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-500 dark:text-slate-400">Priority</label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-navy-900 outline-none focus:border-accent-400 dark:border-navy-700 dark:bg-navy-800 dark:text-slate-100"
              >
                {['High', 'Med', 'Low'].map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-500 dark:text-slate-400">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-navy-900 outline-none focus:border-accent-400 dark:border-navy-700 dark:bg-navy-800 dark:text-slate-100"
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-slate-500 dark:text-slate-400">Starting Column</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-navy-900 outline-none focus:border-accent-400 dark:border-navy-700 dark:bg-navy-800 dark:text-slate-100"
            >
              {COLUMNS.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="mt-5 w-full rounded-lg bg-accent-500 py-2 text-sm font-semibold text-white shadow-card transition-colors hover:bg-accent-600"
        >
          Add Task
        </button>
      </form>
    </div>
  )
}

export default function KanbanTab() {
  const [tasks, setTasks] = useState(loadTasks)
  const [dragOverCol, setDragOverCol] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  const grouped = useMemo(() => {
    const map = Object.fromEntries(COLUMNS.map((c) => [c.id, []]))
    tasks.forEach((t) => {
      if (map[t.status]) map[t.status].push(t)
    })
    return map
  }, [tasks])

  const moveTask = (id, status) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, status } : t)))
  }

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id))
  }

  const createTask = (task) => setTasks((prev) => [task, ...prev])

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData('text/task-id', id)
    e.dataTransfer.effectAllowed = 'move'
  }

  const handleDrop = (e, colId) => {
    e.preventDefault()
    const id = e.dataTransfer.getData('text/task-id')
    if (id) moveTask(id, colId)
    setDragOverCol(null)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <SectionHeading
          eyebrow="Tab 4 · Priority · Interactive"
          title="Interactive Jira Kanban Board"
          description="Drag cards between columns, or use the status dropdown on any card. Board state persists to your browser's local storage across refreshes."
        />
        <button
          onClick={() => setModalOpen(true)}
          className="flex shrink-0 items-center gap-1.5 rounded-lg bg-navy-800 px-4 py-2.5 text-sm font-semibold text-white shadow-card transition-colors hover:bg-navy-700 dark:bg-accent-600 dark:hover:bg-accent-500"
        >
          <Plus size={16} />
          New Task
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {COLUMNS.map((col) => (
          <div
            key={col.id}
            onDragOver={(e) => {
              e.preventDefault()
              setDragOverCol(col.id)
            }}
            onDragLeave={() => setDragOverCol((c) => (c === col.id ? null : c))}
            onDrop={(e) => handleDrop(e, col.id)}
            className={`flex flex-col rounded-xl border-2 border-dashed p-3 transition-colors ${
              dragOverCol === col.id
                ? 'border-accent-400 bg-accent-50/50 dark:bg-accent-900/10'
                : 'border-slate-200 bg-slate-50/60 dark:border-navy-800 dark:bg-navy-900/30'
            }`}
          >
            <div className="mb-3 flex items-center justify-between px-1">
              <div className="flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${col.dot}`} />
                <h3 className="text-sm font-semibold text-navy-900 dark:text-slate-100">{col.label}</h3>
              </div>
              <Badge tone="slate">{grouped[col.id].length}</Badge>
            </div>

            <div className="flex min-h-[120px] flex-1 flex-col gap-2.5">
              {grouped[col.id].length === 0 && (
                <p className="rounded-lg border border-dashed border-slate-200 py-6 text-center text-xs text-slate-400 dark:border-navy-800">
                  Drop tasks here
                </p>
              )}
              {grouped[col.id].map((task) => (
                <TaskCard key={task.id} task={task} onDragStart={handleDragStart} onStatusChange={moveTask} onDelete={deleteTask} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {tasks.length === 0 && (
        <Card className="flex flex-col items-center gap-2 p-10 text-center">
          <Kanban size={28} className="text-slate-300" />
          <p className="text-sm text-slate-500 dark:text-slate-400">No tasks yet — add your first task to get started.</p>
        </Card>
      )}

      {modalOpen && <NewTaskModal onClose={() => setModalOpen(false)} onCreate={createTask} />}
    </div>
  )
}
