import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

type DialogProps = {
  triggerText: string;
  title: string;
  description: string;
  confirmText: string;
  onConfirm: () => any;
};

export function ReusableDialog({
  triggerText,
  title,
  description,
  confirmText,
  onConfirm,
}: DialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded">
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <Button
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white"
            onClick={onConfirm}
          >
            {confirmText}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
