import { api } from "@/lib/axios";

export interface AttachmentBody {
  files: FileList;
}

export async function uploadFile({ files }: AttachmentBody) {
  const avatarForm = new FormData();
  avatarForm.append("files", files[0]);

  return await api.post(
    "/attachments",
    {
      files: avatarForm.get("files"),
    },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
}
