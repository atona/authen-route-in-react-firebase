export type Auth = {
  uid: string | null;
  displayName: string | null;
  email: string | null;
};

export type User = {
  uid: string | null;
  emailVerified: Boolean | null;
  email: string | null;
  icon: string | null;
  last_login: Date | null;
  name: string | null;
};
export type Todo = {
  text: string | null;
  isComplete: Boolean | null;
  docId: string | null;
  createdAt: Date | null;
  completedAt: Date | null;
};

export type AuthApi = {
  signUp: Promise<void> | null;
  signIn: Promise<void> | null;
  signOut: Promise<void> | null;
};

export type TodosApi = {
  add: Promise<void> | null;
  update: Promise<void> | null;
  remove: Promise<void> | null;
};
