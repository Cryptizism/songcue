import { z, defineCollection } from 'astro:content';

const playlist = defineCollection({
  type: 'data',
  schema: z.object({
    playlistId: z.string(),
    playlistName: z.string(),
    playlistImage: z.string().url(),
    songs: z.array(z.object({
        previewUrl: z.string().url(),
        title: z.string(),
        artists: z.string(),
        album: z.string(),
        imageUrl: z.string().url(),
        embedUrl: z.string().url(),
    })),
  }),
});

export const collections = {
  'playlists': playlist,
};