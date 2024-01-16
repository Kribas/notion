"use client";

import { useSettings } from "@/hooks/use-settings";
import { Dialog, DialogHeader } from "@/components/ui/dialog";
import { DialogContent } from "@radix-ui/react-dialog";

export const SettingsModal = () => {
  const settings = useSettings();

  console.log("Initial commit");

  return (
    <Dialog open={settings.isOpen} onOpenChange={settings.onClose}>
      <DialogContent>
        <DialogHeader className="border-b pb-3">
          <h2 className="text-lg font-medium">My Settings</h2>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
