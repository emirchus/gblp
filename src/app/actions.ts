'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createClient } from '@/lib/supabase/server';

export const signOutAction = async () => {
  const supabase = createClient();
  await supabase.auth.signOut();

  revalidatePath('/', 'layout');

  return redirect('/');
};
