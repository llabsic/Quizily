import { toast } from "@heroui/react";
import { supabase } from "@/lib/supabase/client";

export function createSwitchHandler(setItem) {
  return (id) => {
    setItem(id);
  };
}

export function createIndexedClickHandler(handler, id) {
  return () => handler(id);
}

export function createInviteCopyHandler(params) {
  const { copyToClipboard, originUrl, slug } = params;

  return async () => {
    const ok = await copyToClipboard(`${originUrl}/invite/in/${slug}`);
    if (ok) {
      toast.success("Invite link copied!", {
        description: "You can send this link to users who should join."
      });
      return;
    }

    toast.danger("Copy failed", {
      description: "Unable to copy invite link.",
    });
  };
}

export function createJoinInstituteHandler(params) {
  const { user, institute, setJoining, setJoinMessage, push } = params;

  return async () => {
    if (!user || !institute) return;

    try {
      setJoining(true);
      setJoinMessage("");

      const { error } = await supabase.from("institute_users").insert({
        institute_id: institute.id,
        user_id: user.id,
      });

      if (error) {
        if (error.code === "23505") {
          setJoinMessage("You are already a member of this institute.");
          return;
        }

        const details = [error.message, error.details, error.hint]
          .filter(Boolean)
          .join(" | ");

        setJoinMessage(
          `Failed to join institute.${details ? ` ${details}` : " Please try again."}`,
        );
        console.error("Join institute error:", error.message);
        return;
      }

      setJoinMessage("You joined the institute successfully.");
      push(`/institutes/${institute.slug}`);
    } finally {
      setJoining(false);
    }
  };
}
