'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/hooks/useSupabase';

export default function UserInfo() {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser()
      if (!error) setUser(data.user)
    }

    getUser()
  }, [])

  if (!user) return <p>Not logged in</p>

  return (
    <div>
      <p>Email: {user.email}</p>
      <p>Name: {user.user_metadata.full_name}</p>
      <img src={user.user_metadata.avatar_url} width={80} />
    </div>
  )
}
