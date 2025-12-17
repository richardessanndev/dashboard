'use client'

import { supabase } from '@/lib/supabaseClient'

export default function Home() {
  const login = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'discord',
      options: {
        redirectTo: 'http://localhost:3000/dashboard',
      },
    })
  }

  return (
    <main className="flex h-screen items-center justify-center">
      <button
        onClick={login}
        className="rounded bg-indigo-600 px-6 py-3 text-white"
      >
        Login con Discord
      </button>
    </main>
  )
}
