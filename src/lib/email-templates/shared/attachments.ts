import type { Attachment } from 'nodemailer/lib/mailer';
import type { UploadedFile } from '@/types';

export async function buildEmailAttachments(files: UploadedFile[] = []): Promise<Attachment[]> {
  if (!files.length) return [];

  const results = await Promise.all(
    files.map(async (file): Promise<Attachment | null> => {
      try {
        const response = await fetch(file.url);
        if (!response.ok) {
          console.error(`Attachment fetch failed (${response.status}): ${file.name}`);
          return null;
        }

        const buffer = Buffer.from(await response.arrayBuffer());
        return {
          filename: file.name,
          content: buffer,
        };
      } catch (error) {
        console.error(`Could not attach file "${file.name}":`, error);
        return null;
      }
    })
  );

  return results.filter((item): item is Attachment => item !== null);
}
