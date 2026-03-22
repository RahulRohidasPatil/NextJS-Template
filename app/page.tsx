import { ModeToggle } from "@/components/mode-toggle"

export default function Home() {
  return (
    <main className="my-auto flex flex-col items-center gap-2">
      <ModeToggle align="center" />
      <h1 className="text-3xl leading-10 font-semibold tracking-tight">
        Next.js Template by Rahul Patil
      </h1>
    </main>
  )
}
