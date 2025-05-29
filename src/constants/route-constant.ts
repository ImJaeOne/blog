export const ROUTE = {
  HOME: "/",
  PROJECT: (slug: string) => `/${slug}`,
  ABOUT: "/about",
  NOTES: "notes",
  NOTE_POST: "/notes/post",
  NOTE_DETAIL: (id: number) => `/notes/${id}`,
};
